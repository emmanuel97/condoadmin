const expresss = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
//faz require das tabelas no diretorio fornecido em todos os arquivos js

//iniciando o app
const app = expresss();
app.use(expresss.json());

// iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/condoapi",
     {useNewUrlParser: true, useUnifiedTopology: true },
     );
//chama tabela do banco
//require('./src/models/Condominio.js');
requireDir('./src/models');


//instancia da tabela desejada
//const Condominio = mongoose.model('Condominio');
/*
//rotas do aplicativo (requicisoes)
//requisisao para o servidor na raiz
app.get('/',(req,res) =>{

    //insert in table
    Condominio.create({
        nome: "tutorial de nodejs",
        endereco: "tutorial para aprender a desenvolver uma api com nodejs e MongoDB",
        tel:"google.com",
        email: "tutorial de nodejs",
        cnpj: "tutorial para aprender a desenvolver uma api com nodejs e MongoDB"
    });

    return res.send("ola amigo");
});
*/

//logica das rotas movida ao arquivo routes.j

//rotas
app.use('/api',require("./src/routes"));
//use aceita qualquer tipo de requisisao


app.listen(3001); 
//configura a porta do projeto