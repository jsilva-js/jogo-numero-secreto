let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Adivinhe o número entre 1 e 99 para vencer o jogo');

function verificarPalpite(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let mensagemTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1',`Você acertou o número secreto em ${tentativas} ${mensagemTentativa}`);
        exibirTextoNaTela('p',`O número secreto é ${chute}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute < numeroSecreto){
        exibirTextoNaTela('p',`O número secreto é maior do que ${chute}`);
        } else {
        exibirTextoNaTela('p',`O número secreto é menor do que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 99 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'Adivinhe o número entre 1 e 99 para vencer o jogo');
}