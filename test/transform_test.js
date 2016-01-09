var invert = require('../lib/invert');
var fs = require('fs');
var expect = require('chai').expect;
var bufferObject;

describe('the invert function', function() {
  before(function(done) {
    fs.readFile('./img/palette-bitmap.bmp', function(err, data) {
      bufferObject = data;
      done();
    });
  });

  it('miranda does not care', function() {
    expect(typeof invert).to.eql('function');
  });

  it('should contain a buffer', function() {
    expect(Buffer.isBuffer(bufferObject)).to.eql(true);
  });

});
