var database = require("../database/config")

exports.enviarRespostas = async (dados) => {
  var { fkusuario, r1, r2, r3, r4, r5, r6, r7 } = dados;

  var instrucaoSql = `
    INSERT INTO resposta (fkusuario, r1, r2, r3, r4, r5, r6, r7)
    VALUES (${fkusuario}, ${r1}, ${r2}, ${r3}, ${r4}, ${r5}, ${r6}, ${r7});
  `;

  console.log("Executando SQL:", instrucaoSql);

  return database.executar(instrucaoSql);
};
