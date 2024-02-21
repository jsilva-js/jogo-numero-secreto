let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Adivinhe o número entre 1 e 99 para vencer o jogo');

function verificarPalpite(){
    alert(numeroSecreto);
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 99 + 1);
}