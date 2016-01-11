function invert(data, callback) {

  var dataStart = data.readUInt32LE(10);  // determine start of pixel data

  // for palette bitmaps, use dataStart as length of pixel data array
  // if pixel data starts at 54, bitmap is non-palette, set dataStart to data.length
  if (dataStart === 54) {
    dataStart = data.length;
  }

  // execute transform, skipping the first 54 bytes containing header info
  for (var i = 54; i < dataStart; i++) {
    data[i] = 255 - data[i];
  }
  callback(null, data);
}

function grayscale(data, callback) {

  var dataStart = data.readUInt32LE(10);  // determine start of pixel data
  var eachPixel = 4;

  // for palette bitmaps, use dataStart as length of pixel data array
  // if pixel data starts at 54, bitmap is non-palette, set dataStart to data.length
  if (dataStart === 54) {
    dataStart = data.length;
    eachPixel = 3;
  }

  for (var i = 54; i < dataStart; i+=eachPixel) {
    var grey = Math.floor((data.readUInt8(i) + data.readUInt8(i+1) + data.readUInt8(i+2)) / 3);
    data.writeUInt8(grey, i);
    data.writeUInt8(grey, i + 1);
    data.writeUInt8(grey, i + 2);
  }
  callback(null, data);
}

exports.invert = invert;
exports.grayscale = grayscale;
