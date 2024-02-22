let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Adivinhe o número entre 1 e 99 para vencer o jogo');

function verificarPalpite(){
    let chute = document.querySelector('input').value;
    if (chute > numeroSecreto){
        alert(`O número secreto é menor do que ${chute}!`);
    } else if (chute < numeroSecreto){
        alert(`O número secreto é maior do que ${chute}!`);
    } else if (chute == numeroSecreto){
        alert(`Você acertou! ${chute} era o número secreto.`);
    } else {
        alert('Número inválido!');
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 99 + 1);
}