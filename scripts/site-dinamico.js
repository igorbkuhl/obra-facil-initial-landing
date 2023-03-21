// acessando o botão
let botao = document.getElementById("submit-button");

// acessando o formulario
var formulario = document.getElementsByName("lead").item(0);

botao.onmouseover = function() {
    botao.style.backgroundColor = "rgb(141, 223, 141)";
}
botao.onmouseout = function() {
    botao.style.backgroundColor = "rgb(118, 172, 118)";
}

formulario.onsubmit = function() { 
    let resposta = confirm("Tens a certeza, meu mano?");

    if (resposta) {
        console.log("Dados enviados com sucesso.");
    } else {
        console.log("Envio cancelado.");
        document.getElementById("mensagem").textContent = "Revise seus dados.";  
    }
    
    return resposta;
}