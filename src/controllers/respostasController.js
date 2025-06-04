const respostasModel = require('../models/respostasModel');

exports.enviarRespostas = (req, res) => {
  var r1 = req.body.r1;
  var r2 = req.body.r2;
  var r3 = req.body.r3;
  var r4 = req.body.r4;
  var r5 = req.body.r5;
  var r6 = req.body.r6;
  var r7 = req.body.r7;
  var fkusuario = req.body.fkusuario;
  var fkestilo = req.body.fkestilo;

  console.log('fkEstilo da controller: '+ fkestilo);
  
  

  respostasModel.enviarRespostas({ fkestilo, fkusuario, r1, r2, r3, r4, r5, r6, r7 })
    .then(() => {
      res.status(201).json({ message: 'Respostas salvas com sucesso' });
    })
    .catch(error => {
      console.error('Erro ao salvar respostas:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    });
};

exports.obterRespostas = (req, res) => {
  const idusuario = parseInt(req.params.idusuario, 10);
  if (isNaN(idusuario)) {
    return res.status(400).json({ error: "ID do usuário inválido." });
  }

  respostasModel.obterRespostasPorUsuario(idusuario)
    .then(resultados => {
      if (resultados.length === 0) {
        return res.status(404).json({ error: "Nenhuma resposta encontrada para este usuário." });
      }
      const dadosGrafico = {
        usuario: {
          r1: resultados[0].usuario_r1,
          r2: resultados[0].usuario_r2,
          r3: resultados[0].usuario_r3,
          r4: resultados[0].usuario_r4,
          r5: resultados[0].usuario_r5,
          r6: resultados[0].usuario_r6,
          r7: resultados[0].usuario_r7
        },
        arteMarcial: {
          nome: resultados[0].arte_nome,
          tipo: resultados[0].arte_tipo,
          desc: resultados[0].arte_desc,
          tend: resultados[0].arte_tend,
          pais: resultados[0].arte_pais,
          r1: resultados[0].arte_r1,
          r2: resultados[0].arte_r2,
          r3: resultados[0].arte_r3,
          r4: resultados[0].arte_r4,
          r5: resultados[0].arte_r5,
          r6: resultados[0].arte_r6,
          r7: resultados[0].arte_r7
        }
      };
      
      res.status(200).json([dadosGrafico]);
    })
    .catch(error => {
      console.error("Erro ao buscar respostas:", error);
      res.status(500).json({ error: "Erro interno do servidor." });
    });
};