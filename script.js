// script.js
function responder(opcao) {
    const resposta = document.getElementById('resposta');
    if(opcao === 'certa') {
        resposta.textContent = "Parabéns! Rotação de culturas é sustentável!";
        resposta.style.color = "green";
    } else {
        resposta.textContent = "Ops! Essa prática não é sustentável. Tente outra.";
        resposta.style.color = "red";
    }
}