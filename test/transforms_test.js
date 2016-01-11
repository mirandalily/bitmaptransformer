var transforms = require('../lib/transforms');
var fs = require('fs');
var expect = require('chai').expect;
var bufferObject;

describe('the transforms object', function() {
  before(function(done) {
    fs.readFile('./img/palette-bitmap.bmp', function(err, data) {
      bufferObject = data;
      done();
    });
  });

  it('should contain a buffer', function() {
    expect(Buffer.isBuffer(bufferObject)).to.eql(true);
  });
  
  it('contains a invert method', function() {
    expect(typeof transforms.invert).to.eql('function');
  });

  it('contains a grayscale method', function() {
    expect(typeof transforms.grayscale).to.eql('function');
  });



});
