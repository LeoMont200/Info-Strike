var express = require('express');
var router = express.Router();
var respostasController = require('../controllers/respostasController');

router.post("/enviarRespostas", function (req, res) {
    respostasController.enviarRespostas(req, res);
})

router.get("/obterRespostas/:idusuario", respostasController.obterRespostas);


module.exports = router;
