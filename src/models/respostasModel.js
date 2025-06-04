var database = require("../database/config")

exports.enviarRespostas = (dados) => {
  var { fkusuario, fkestilo, r1, r2, r3, r4, r5, r6, r7 } = dados;

  fkusuario = Number(fkusuario);
  fkestilo = Number(fkestilo);
  r1 = Number(r1);
  r2 = Number(r2);
  r3 = Number(r3);
  r4 = Number(r4);
  r5 = Number(r5);
  r6 = Number(r6);
  r7 = Number(r7);

  var instrucaoSql = `
      INSERT INTO resposta (fkusuario, fkarteMarcial, r1, r2, r3, r4, r5, r6, r7)
      VALUES (${fkusuario},${fkestilo}, ${r1}, ${r2}, ${r3}, ${r4}, ${r5}, ${r6}, ${r7});
    `;

  console.log("Executando SQL:", instrucaoSql);
  return database.executar(instrucaoSql);
};

exports.obterRespostasPorUsuario = (idusuario) => {
  const instrucaoSql = `
    SELECT r.r1 as usuario_r1, r.r2 as usuario_r2, r.r3 as usuario_r3,
     r.r4 as usuario_r4, r.r5 as usuario_r5, r.r6 as usuario_r6, r.r7 as usuario_r7,
     a.r1 as arte_r1, a.r2 as arte_r2, a.r3 as arte_r3, a.r4 as arte_r4, a.r5 as arte_r5,
      a.r6 as arte_r6, a.r7 as arte_r7, a.nome as arte_nome, a.tipo as arte_tipo, a.tendencia as arte_tend,
       a.descricao as arte_desc, a.paisOrigem as arte_pais
      FROM resposta as r
      join arteMarcial as a on r.fkarteMarcial = a.idarteMarcial
  WHERE fkusuario = ${idusuario}
  ORDER BY idresposta DESC LIMIT 1;
  `;
  return database.executar(instrucaoSql);
};