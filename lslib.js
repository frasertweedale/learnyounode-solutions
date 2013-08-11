var fs = require('fs');

module.exports = function(dirname, ext, callback) {
  var pat = RegExp('\\.' + ext + '$');
  fs.readdir(dirname, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      for (i = 0; i < files.length; i++) {
        if (pat.test(files[i])) {
          result.push(files[i]);
        }
      }
      callback(null, result);
    }
  });
};
