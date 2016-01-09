var invert = require('../lib/invert');
var fs = require('fs');
var expect = require('chai').expect;

describe('the invert function', function() {
  it('miranda does not care', function() {
    expect(typeof invert).to.eql('function');
  });
});
