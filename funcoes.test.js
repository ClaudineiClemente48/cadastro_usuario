const minhasFuncoes = require('./funcoes')
/* Minimo de caracteres*/ 
test('O mínimo é de 5 e passei 3, tem que retornar false',  () => {
   
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(5, 'bob')).toBe(false);
})

test('O mínimo é de 5 e passei 3, tem que retornar true', () => {
        
     expect(minhasFuncoes.fnValidarMinimoDeCaracteres(3, 'marley')).toBe(true);
})

/*Campo Obrigatorio*/ 
test('O campo obrigatorio vazio, tem que retornar false',  () => {
   
    expect(minhasFuncoes.fnValidarCampoObrigatorio('')).toBe(false);
})

test('O campo obrigatorio com espaço, deve retornar false',  () => {
   
    expect(minhasFuncoes.fnValidarCampoObrigatorio('   ')).toBe(false);
})


test('O campo obrigatório com valor válido, deve retornar true', () => {
        
     expect(minhasFuncoes.fnValidarCampoObrigatorio('teste')).toBe(true);
})

/*senhaIgual*/ 

test('A senha não corresponde , tem que retornar false',  () => {
   
    expect(minhasFuncoes.fnValidarSenhaIgual('senha123', ' senha1234')).toBe(false);
})
test('A senha vazia , tem que retornar false',  () => {
   
    expect(minhasFuncoes.fnValidarSenhaIgual('senha123', '  ')).toBe(false);
})

test('A senha é igual, tem que retornar true', () => {
        
     expect(minhasFuncoes.fnValidarSenhaIgual('senha123', 'senha123')).toBe(true);

})

/* senha maiuscula*/ 
test('A senha não conter letra maiuscula, tem que retornar false',  () => {
   
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('senha123')).toBe(false);
})

test('A senha deve conter letra maiuscula, tem que retornar true', () => {
        
     expect(minhasFuncoes.fnValidarSenhaMaiuscula('Senha123')).toBe(true);
})

/*senha caracteres especiais*/
test('A senha não conter caracters especial, tem que retornar false',  () => {
   
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('senha123')).toBe(false);
})

test('A senha deve conter caracters especial, tem que retornar true', () => {
        
     expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('@Senha123')).toBe(true);
})

/*validar email*/

test('O email não possui um @ ou.',  () => {
   
    expect(minhasFuncoes.fnValidarEmail('teste@email')).toBe(false);
})

test('O email possui um @ e um ponto, tem que retornar true',  () => {
        
     expect(minhasFuncoes.fnValidarEmail('userteste@email.com')).toBe(true);
})







