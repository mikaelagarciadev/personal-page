console.log("JavaScript conectado com sucesso!");

document.getElementById("botaoenviar").addEventListener("click", verificarFormulario)

function verificarFormulario() {
    if(document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" && 
    document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha todos os campos!")
    }
}