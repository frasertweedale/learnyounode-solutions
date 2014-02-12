var http = require('http');

var urls = process.argv.slice(2);
var results = [];

// initialise results array
for (i = 0; i < urls.length; i++) {
  results[i] = null;
}

for (i = 0; i < urls.length; i++) {
  (function(i) {
    http.get(urls[i], function(request) {
      var result = "";
      request.setEncoding("utf8");
      request.on("data", function(data) {
        result += data;
      });
      request.on("end", function() {
        results[i] = result;
        var resultCount = 0;
        for (j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++;
        }
        if (resultCount == results.length) {
          for (j = 0; j < results.length; j++) {
            console.log(results[j]);
          }
        }
      });
    });
  })(i);
}


// OR: 
// var http = require('http');
//       url1 = process.argv[2],
//       url2 = process.argv[3],
//       url3 = process.argv[4];
// var count = 0;
// var list = {0: '', 1: '', 2: ''};
// var url_list = [url1,url2,url3];

// url_list.forEach(function(url){
//   http.get(url, function(res){
//       var string = '';
//       res.on('data',function(data){
//         string += data.toString();
//       });
//       res.on('end',function(){
//         count += 1;
//         list[url_list.indexOf(url)] = string;
//         if(count == 3){
//           for (i=0;i<3;i++){
//             console.log(list[i]);
//           }
//         }
//   });
//   });
// });

//Original solution: 
// var http = require('http')
 //  var bl = require('bl')
 //  var results = []
 //  var count = 0
  
 //  function printResults () {
 //    for (var i = 0; i < 3; i++)
 //      console.log(results[i])
 //  }
  
 //  function httpGet (index) {
 //    http.get(process.argv[2 + index], function (response) {
 //      response.pipe(bl(function (err, data) {
 //        if (err)
 //          return console.error(data)
  
 //        results[index] = data.toString()
 //        count++
  
 //        if (count == 3) // yay! we are the last one!
 //          printResults()
 //      }))
 //    })
 //  }
  
 //  for (var i = 0; i < 3; i++)
 //    httpGet(i)


