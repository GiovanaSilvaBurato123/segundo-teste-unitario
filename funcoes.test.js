const funcoes = require('./funcoes')

test('Verificar aprovação do aluno', function () {
    
const alunoAprovado = funcoes.alunoAprovado(8)

expect(alunoAprovado).toBeTruthy();
})

test('Verificar o nome do professor na lista', function () {

    const listaProfessores = funcoes.listaProfessores()

    expect(listaProfessores).toContain('Joana')

})

test('Validador de email', function () {

    const emailValido = funcoes.validarEmail('teste@email.com')

    const emailInvalido = funcoes.validarEmail('teste.com')

    expect(emailValido).toBe(true);
    expect(emailInvalido).toBe(false);
})

test('Calcular a quantidade de faltas', function () {
    
    expect(funcoes.calcularFaltas(20, 5)).toBe('25.00');
})

test('verificarUsuarioLogado deve retornar true para "admin"', () => {
    const usuarioCorreto = funcoes.verificarUsuarioLogado ('admin')
    const usuarioIncorreto = funcoes.verificarUsuarioLogado('@dmin')
expect(usuarioCorreto).toBe(true)
expect(usuarioIncorreto).toBe(false)

  });
