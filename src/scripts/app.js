let numeroSecreto = 7;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Adivinhe o número entre 1 e 99 para vencer o jogo');

function verificarPalpite(){
    let chute = document.querySelector('input').value;
    if (chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Jogo do número Secreto');
        exibirTextoNaTela('p',`O número secreto é menor do que ${chute}`);
    } else if (chute < numeroSecreto){
        exibirTextoNaTela('h1', 'Jogo do número Secreto');
        exibirTextoNaTela('p',`O número secreto é maior do que ${chute}`);
    } else if (chute == numeroSecreto){
        exibirTextoNaTela('h1',`Você acertou!`);
        exibirTextoNaTela('p',`O número secreto é ${chute}`)
    } else {
        exibirTextoNaTela('h1', 'Jogo do número Secreto');
        exibirTextoNaTela('p','Tente um número entre 1 e 99');
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 99 + 1);
}