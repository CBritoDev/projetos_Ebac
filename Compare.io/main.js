const form = document.getElementById("form-compare");
const numA = document.getElementById("number-a");
const numB = document.getElementById("number-b");
const legendMessageContainer = document.querySelector('.error-message')
const containerMessageSuccess = document.querySelector(".success-message");
let formValido = false;

function cleanValues(){ //funcao limpa valores de estilos
    containerMessageSuccess.style.display = 'none'
    legendMessageContainer.innerHTML = 'Number B must be greater'
    legendMessageContainer.style.background = 'white'
}

function compareNumber() {
  const numberAValue = Number(numA.value); // Converte o valor para número
  const numberBValue = Number(numB.value); // Converte o valor para número
    if (numberBValue > numberAValue) {
    return true;
    } else if (numberBValue < numberAValue) {
    return false;
    } else if (numberBValue == numberAValue) {
    return null;
    }
}

form.addEventListener("submit", function (e) { //mostra mensagens
    e.preventDefault();

    const messageSuccess = `The number <b>${numB.value}</b> is greater than the number <b>${numA.value}</b>! So <b>B</b> is greater!`;
    const messageNoSuccess = `The number <b>${numB.value}</b> is smaller than the number <b>${numA.value}</b>. So <b>B</b> is smaller`;
    const messageUndefined = `The numbers are the same</b>!`;

    formValido = compareNumber();

    if (formValido == true) {
        containerMessageSuccess.innerHTML = messageSuccess;
        containerMessageSuccess.style.display = "block"
        containerMessageSuccess.style.background = 'green'

    }else if (formValido == false) {
        containerMessageSuccess.innerHTML = messageNoSuccess;
        containerMessageSuccess.style.display = "block";
        containerMessageSuccess.style.background = 'red'
    } else if (formValido == null) {
        containerMessageSuccess.innerHTML = messageUndefined;
        containerMessageSuccess.style.display = "block"
        containerMessageSuccess.style.background = 'blue'
    }

    numA.value = '';
    numB.value = '';
})

form.addEventListener('reset',function(e){ //limpa os estilos quando reset é acionado
    cleanValues()
})


form.addEventListener('keyup',function(e){ //mostra comparação em andamento
        legendMessageContainer.innerHTML = 'Comparison in progress...'
        legendMessageContainer.style.background = 'yellow'
})

