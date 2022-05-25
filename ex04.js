const express = require('express');
const server = express();

server.route('/clientes')
  .get((req, res) => res.send('Lista de Clientes'))
  .post((req, res) => res.send('NovoCliente'))
  .put((req, res) => res.send('Altera Cliente'))
  .delete((req, res) => res.send('Remove Cliente'))

/* Ou */
// server.route('/clientes').get((req, res) => res.send('Lista de Clientes'))
// server.route('/clientes3').post((req, res) => res.send('NovoCliente'))
// server.route('/clientes10').put((req, res) => res.send('Altera Cliente'))
// server.route('/clientes').delete((req, res) => res.send('Remove Cliente'))

server.listen(3000, () => console.log('Executandooo...'))