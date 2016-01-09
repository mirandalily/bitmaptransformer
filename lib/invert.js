module.exports = function invert(data, callback) {
  var length = data.readUInt32LE(10);
  if (length === 54) {
    length = data.length;
  }
  for (var i = 54; i < length; i+=1) {
    data[i] = 255 - data[i];
  }
  callback(null, data);
};
