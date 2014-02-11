var http = require('http');

var url = process.argv[2];

http.get(url, function(request) {
  request.setEncoding("utf8");
  request.on("data", function(data) {
    console.log(data);
  });
});

//OR:
// var http = require('http');
// var url = process.argv[2];
// http.get(url, function(response){
//   response.on('data', function(data){
//     console.log(data.toString());
//   })
// });
