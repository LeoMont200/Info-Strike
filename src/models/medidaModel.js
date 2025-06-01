var database = require("../database/config");

// Buscar respostas do usuário (última resposta cadastrada)
function buscarUltimasMedidas(idusuario) {
    var instrucaoSql = `
        SELECT r1, r2, r3, r4, r5, r6, r7
        FROM resposta
        WHERE fkusuario = ${idusuario}
        ORDER BY idresposta DESC
        LIMIT 1;
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Buscar perfil da arte marcial ideal do usuário (relacionado via fkarteMarcial)
function buscarMedidasEmTempoReal(idusuario) {
    var instrucaoSql = `
        SELECT am.r1, am.r2, am.r3, am.r4, am.r5, am.r6, am.r7, am.nome
        FROM usuario u
        JOIN arteMarcial am ON u.fkarteMarcial = am.idarteMarcial
        WHERE u.idusuario = ${idusuario};
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
};
