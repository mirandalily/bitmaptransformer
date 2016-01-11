const fs = require('fs');
var transforms = require('./lib/transforms');
var result;

var file = process.argv[2];
var transformType = process.argv[3];

function write() {
  var newFile = '' + file + '-' + transformType + '.bmp';
  fs.writeFile(newFile, result, function(err) {
    if (err) {
      throw err;
    }
    console.log('file saved as ' + newFile.slice(4)); //eslint-disable-line
  });
}

if(transformType === 'invert' || transformType === 'grayscale') {
  fs.readFile(file, function(err, data) {
    transforms[transformType](data, function(err, data) {
      result = data;
      write();
    });
  });
} else {
  console.log('Please input a valid transform type.'); //eslint-disable-line
}
