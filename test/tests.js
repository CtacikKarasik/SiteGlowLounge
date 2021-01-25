let requirejs = require('requirejs');
requirejs.config({
    baseUrl: '.',
    nodeRequire: require
});
var chai = require('chai');
var ko = require('../src/js/knockout.min');
var MainViewModel = requirejs('../src/js/vm/MainViewModel.min.js');

let assert = chai.assert;
let expect = chai.expect;


suite('MainViewModel', function() {
    setup(function() {
      // ...
    });
  

    suite('clickReserved', function() {
      test('should return false when the phoneNumber is invalid', function() {
        let mainViewModel = new MainViewModel(ko, null);

        mainViewModel.phoneNumber('');
        mainViewModel.nameUser('');
        mainViewModel.numberGuests('');
        mainViewModel.phoneNumber('');
        mainViewModel.phoneNumber('');
        mainViewModel.clickToday();
        mainViewModel.time('');

        mainViewModel.clickReserved();
        
        assert.equal(mainViewModel.isFail, true);
      });
    });
  });