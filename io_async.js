var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile(filename, function(err, data) {
  console.log(data.toString().split('\n').length - 1 );
});

//OR
//fs.readFile(filename, 'utf-8', function(err,data){
// var newline = data.split('\n');
// console.log(newline.length - 1)
//});
