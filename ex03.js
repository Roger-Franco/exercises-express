const express = require('express');
const server = express();

server.use('/api', function (req, res, next) {
  console.log('Iniciooo...');
  next()
  console.log('Fim...');
})
// o 'use' aceita qualquer verbo, todos os metodos http, e nao discrimina 
// qualquer informação que vem depois do "'/api'" na url 

server.use(function (req, res) {
  console.log('Resposta...');
  res.send('<h1>API!</h1>')
})// nesse caso ele aceitará qualquer url

server.use('/api', function (req, res) {
  console.log('Resposta...');
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executandooo...'))