<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const path = require('path');
const PORTA = 3000;

const app = express();

const usuarioRouter = require("./src/routes/usuarioRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);

app.listen(PORTA, () => {
  console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA}`);
});

=======
const express = require('express');
const cors = require('cors');
const path = require('path');
const PORTA = 3000;

const app = express();

const usuarioRouter = require("./src/routes/usuarioRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);

app.listen(PORTA, () => {
  console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA}`);
});

>>>>>>> 3895ef7a48b52440ffbb6bcb792d0403cb66362d
