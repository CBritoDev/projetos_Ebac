//muitas constantes e variaveis aqui receberam string como valores mimetizando tags do html. Usamos isso para que ao usarmos o innerHTML, possamos reescrever o codigo html e mudar o conteudo da página. Por isso não temos nenhum conteudo no tbody, porque ele foi criado anteriormente somente para teste e depois o proprio usuario insere os valores 

const form =document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festajante"/>' //aqui toda vez que chamarmos a constante, ela aplica essa string.
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>'
let linhas = '';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado"> Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado"> Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima:")) //define a nota minima

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
    
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value)); //puxa o valor dos inputs para dentro do vetor
        
        let linha = '<tr>' //aqui criamos uma linha em html com tags tr e td td td tr, criando um bloco html de tabela
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
    
        linhas += linha; //toda vez que o usuario dá submit, cria-se um bloco novo com as informaçoes do input + informações já criadas anteriomente
    }

    inputNomeAtividade.value= ''; //aqui limpamos o campo logo após o submit
    inputNotaAtividade.value='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody') // aqui selecionamos o elemento HTML pelo querySelector
    corpoTabela.innerHTML = linhas //modificamos o conteudo de tbody com o innerHTML adicionando o conteudo concatenado e expansivel de linhas que recebeu linha 
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaNotas = 0;

    for(let i = 0; i <notas.length;i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}