const validacoes = require('./validacoes');

test('verificar se um aluno é maior de idade', function() {

  const maiorIdade = validacoes.maioridadeAluno(18);

  expect(maiorIdade).toBe(true);
  expect(maiorIdade).toBeTruthy();
})

test('verificar se um aluno é menor de idade', function() {

  const menorIdade = validacoes.maioridadeAluno(17);

  expect(menorIdade).toBe(false);
  expect(menorIdade).toBeFalsy();
})

test('Verificar se a lista de alunos contém o nome Kaique', function() {

  const listaAlunos = validacoes.listaAlunos()

  expect(listaAlunos).toContain('Kaique');
})

test('Verificar senha do admin', function() {

  const senhaCorreta = validacoes.verificarSenhaAdmin('admin');
  const senhaIncorreta = validacoes.verificarSenhaAdmin('@dmin');

  expect(senhaCorreta).toBe('A senha está correta!');
  expect(senhaIncorreta).toBe('A senha está incorreta!')
})

test('Validador de nome', function() {

  const nomeValido = validacoes.validarNome('Kaique');
  const nomeInvalido = validacoes.validarNome('Rafa3l')

  expect(nomeValido).toBe(true);
  expect(nomeInvalido).toBe(false);
})