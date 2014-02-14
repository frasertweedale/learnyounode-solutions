var net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);
