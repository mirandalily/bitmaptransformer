const fs = require('fs');
var transform = require('./lib/invert');
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

var result;
// var data = fs.readFileSync(process.argv[2]);
// console.log(`type: ${bitmap.toString('utf8', 0, 2)}`);
// console.log(`size: ${bitmap.readUInt32LE(2)}`);
// console.log(`start of pixel data: ${bitmap.readUInt32LE(10)}`);
// console.log(`width: ${bitmap.readUInt32LE(18)}`);
// console.log(`height: ${bitmap.readUInt32LE(22)}`);
// console.log(`number of colors: ${bitmap.readUInt32LE(46)}`)
// console.log(bitmap);

fs.readFile(process.argv[2], function(err, data) {
  transform(data, function(err, data) {
    result = data;
    ee.emit('transformed');
  });
});

ee.on('transformed', function() {
  var newFile = 'img/palette-bitmap-invert.bmp';
  fs.writeFile(newFile, result, function(err) {
    if (err) {
      throw err;
    }
    console.log('file saved as ' + newFile.slice(6));
  });
});
