const app = require('../index');
const http = require('http');

const server = http.createServer(app);

server.listen(3000, (erro) => {
  if(erro){
    console.log('Conexão falha!');
  }else{
    console.log('Conexão ok!');
  }
});
