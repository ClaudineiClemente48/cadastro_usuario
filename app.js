document.getElementById("nome").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-nome", "limpar")

    let nomevalido = fnValidarMinimoDeCaracteres(3, this.value);
    if(nomevalido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "No mínimo 3 caracteres")   
    }
    let nomeobrigadorio = fnValidarCampoObrigatorio(this.value);
    if(nomeobrigadorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "campo obrigatório")
        
    }
})

document.getElementById("email").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-email", "limpar")

    let emailvalido = fnValidarMinimoDeCaracteres(5, this.value);
    if(emailvalido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "No mínimo 5 caracteres")
    }
    let emailobrigadorio = fnValidarCampoObrigatorio(this.value);
    if(emailobrigadorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "campo obrigatório")
    }
    let emailFormatoValido = fnValidareEmail(this.value);
    if(emailFormatoValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "Este E-mail é iválido")
    }
        
})


document.getElementById("senha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-senha", "limpar")

    let senhavalido = fnValidarMinimoDeCaracteres(8, this.value);
    if(senhavalido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "No mínimo 8 caracteres")  
    }

    let senhaobrigadorio = fnValidarCampoObrigatorio(this.value);
    if(senhaobrigadorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "campo obrigatório")
    }

    let senhaMaiuscula = fnValidarSenhaMaiuscula(this.value);
    if(senhaMaiuscula == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "A senha deve conter pelo menos uma letra maiúscula")
    } 

    let senhaCaracteresEspecial = fnValidarSenhaCaracteresEspecia(this.value);
    if(senhaCaracteresEspecial == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "A senha deve conter pelo menos um caracteres especial")
    }             
})


document.getElementById("confirmarSenha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-confirmarSenha", "limpar")

    let confirmarsenhavalido = fnValidarMinimoDeCaracteres(8, this.value);
    if(confirmarsenhavalido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confirmarSenha", "No mínimo 8 caracteres")  
    }
    let confirmarSenhaobrigatorio = fnValidarCampoObrigatorio(this.value);
    if(confirmarSenhaobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confirmarSenha", "campo obrigatório")   
    }
           
})

document.getElementById("cidade").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-cidade", "limpar")

    let cidadevalido = fnValidarMinimoDeCaracteres(3, this.value);
    if(cidadevalido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "No minimo 3 caracters")
        
    }
    let cidadeobrigatorio = fnValidarCampoObrigatorio(this.value);
    if(cidadeobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "campo obrigatório")   
        
    }
})

