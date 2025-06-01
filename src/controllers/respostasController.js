const respostasModel = require('../models/respostasModel');

exports.enviarRespostas = async (req, res) => {
  try {
    const { r1, r2, r3, r4, r5, r6, r7 } = req.body;

    if (typeof fkusuario !== 'number' ||
      [r1, r2, r3, r4, r5, r6, r7].some(val => typeof val !== 'number')
    ) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }

    await respostasModel.enviarRespostas({fkusuario, r1, r2, r3, r4, r5, r6, r7 });

    res.status(201).json({ message: 'Respostas salvas com sucesso' });
  } catch (error) {
    console.error('Erro ao salvar respostas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
