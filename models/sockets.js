class Sockets {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {

    // onConnection
    this.io.on('connection', (socket) => { 
      // escuchar evento mensaje-to-server
    socket.on('mensaje-to-server', (data) => {
     console.log(data); 
    this.io.emit('mensaje-to-cliente', data)
 });

});

  }
}

module.exports = Sockets;