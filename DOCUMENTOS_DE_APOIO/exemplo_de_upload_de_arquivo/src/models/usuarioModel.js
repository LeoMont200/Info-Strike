<<<<<<< HEAD
const database = require("../database/config");

function salvar(usuario) {
  const instrucao = `insert into usuario (nome, email, imagem_perfil) values ('${usuario.nome}', '${usuario.email}', '${usuario.imagem}')`;

  return database.executar(instrucao);
}

function buscarUsuarioPeloId(id) {
  const instrucao = `select * from usuario where id = ${id}`;

  return database.executar(instrucao);
}

=======
const database = require("../database/config");

function salvar(usuario) {
  const instrucao = `insert into usuario (nome, email, imagem_perfil) values ('${usuario.nome}', '${usuario.email}', '${usuario.imagem}')`;

  return database.executar(instrucao);
}

function buscarUsuarioPeloId(id) {
  const instrucao = `select * from usuario where id = ${id}`;

  return database.executar(instrucao);
}

>>>>>>> 3895ef7a48b52440ffbb6bcb792d0403cb66362d
module.exports = { salvar, buscarUsuarioPeloId }