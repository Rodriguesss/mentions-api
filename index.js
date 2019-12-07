const express = require('express');
const app = express();
const connection = require('./database/database');
const porta = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Mention = require('./models/MentionModel');

const route = require('./routes/index-routes');
app.use('/', route);

const mentionsRoutes = require('./routes/mentions-route');
app.use('/mentions', mentionsRoutes);

connection.authenticate().then(() => {
    console.log('Conexão feita com sucesso!');
  }).catch((erro) => {
    res.render(erro);
  });

app.listen(porta, (erro) => {
  if(erro){
    console.log('Conexão falha!');
  }else{
    console.log('Conexão ok!');
  }
});