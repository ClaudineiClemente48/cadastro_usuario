
function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "" || cidade === "" || estado === "") {
        alert("Todos os campos são obrigatórios!");
        return false;
    }
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return false;
    }
    alert("Cadastro realizado com sucesso!");
    return true;
}