
function validarFormulario() {

    // Obter os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

 // Verificar se todos os campos obrigatórios foram preenchidos
    if (!nome || !email || !senha || !confirmarSenha || !cidade || !estado) {
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