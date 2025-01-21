const form = document.getElementById("form-lista")
const ligar = document.getElementById('botao-ligar')
const nomeContato = document.getElementById
('nome-contato')
const numeroContato = document.getElementById('numero-contato')
const enderecoContato = document.getElementById('endereco-contato')
let linhas = ''

form.addEventListener("submit", function(e){
    e.preventDefault()

adicionaLinha()
atualizaTabela()
})

ligar.addEventListener("click",function(l){
    window.location.href = `tel:${ligar}`;
})

function adicionaLinha(){
    let linha = "<tr>"
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroContato.value}</td>`
    linha += `<td>${enderecoContato.value}</td>`
    linha += "</tr>"

    linhas += linha

    numeroContato.value= ''
    nomeContato.value = ''
    enderecoContato.value = ''
}

function atualizaTabela(){
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = linhas
}