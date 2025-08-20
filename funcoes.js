function alunoAprovado(nota) {
  return nota >= 8;

}

function listaProfessores() {
  return ['Giovana', 'Joana', 'Isabelly', 'laura'];
}

function validarEmail(email) {
  return email.includes('@');
}

function calcularFaltas(totalAulas, faltas) {
  const porcentagem = (faltas / totalAulas) * 100;
  return porcentagem.toFixed(2); // 
}

function verificarUsuarioLogado(usuario) {
  return usuario === 'admin';
}

module.exports = {
 alunoAprovado,
 listaProfessores,
 validarEmail,
 calcularFaltas,
 verificarUsuarioLogado,
}