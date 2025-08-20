function maioridadeAluno(idade) {
  if(idade >= 18) {
    return true;
  } else {
    return false;
  }
}

function listaAlunos() {
  return [
    'Kaique',
    'Matheus',
    'Carlos',
    'Rafael',
    'Juliana',
    'Thomas',
    'Camila',
    'Ana'
  ]
}

/**
 * Particularidade
 * = Atribuição de valor
 * == Comparação de valor
 * === Compara o valor e o tipo
 */

function verificarSenhaAdmin(senha) {
  if(senha === 'admin') {
    return 'A senha está correta!'
  } else {
    return 'A senha está incorreta!'
  }
}

function validarNome(nome) {

  const regex = !/\d/.test(nome);

  return regex; // true ou false
}

module.exports = {
  maioridadeAluno,
  listaAlunos,
  verificarSenhaAdmin,
  validarNome
}