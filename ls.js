var fs = require('fs');

var dirname = process.argv[2];
var ext = process.argv[3];
var pat = RegExp('\\.' + ext + '$');

file = fs.readdir(dirname, function(err, files) {
  for (i = 0; i < files.length; i++) {
    if (pat.test(files[i])) {
      console.log(files[i]);
    }
  }
});

//OR solution without using RegExp
// var fs = require('fs');
// var dirpath = process.argv[2];
// var ext = process.argv[3];


// fs.readdir(dirpath, function(err,lists){
//   for(i=0; i<lists.length; i++){
//     if(lists[i].split('.').pop() == ext){
//       console.log(lists[i]);
//     }
//   } 
// })

