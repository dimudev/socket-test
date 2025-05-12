// Servidor de Express
const express = require('express');
const http =require('http')
const socketIo = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // http server
    this.server = http.createServer(this.app);
    
    // Configuración de socket server
    this.io = socketIo(this.server);
  }

  configurarSockets() {
    new Sockets(this.io);
  }


  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, '../public')));

  }

  execute() {    
  this.middlewares();
  // Inizializar mis sockets
  this.configurarSockets();

  this.server.listen(this.port, () => {
    console.log('Servidor corriendo en puerto:', this.port);
  });
  }


}

module.exports = Server;