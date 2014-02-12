var http = require('http');

var map = require('through2-map');

uc = map(function(chunk) {
  return chunk.toString().toUpperCase();
});

server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    request.pipe(uc).pipe(response);
  }
});
server.listen(8000);


//OR: 
// var http = require('http');
// server = http.createServer(function(req,res){
//   if(req.method != 'POST'){
//    return res.end('send me a POST\n');
//    };
//   var string = '';
//   req.on('data',function(data){
//     string += data.toString();
//   })
//   req.on('end',function(){
//     res.end(string.toUpperCase());
//   });
// });
// server.listen(8000);
