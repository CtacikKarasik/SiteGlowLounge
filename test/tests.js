define(['chai', 'js/knockout.min', 'vm/MainViewModel.min'], function (chai, ko, MainViewModel) {
    'use strict';

    let assert = chai.assert;
    let expect = chai.expect;

    
    suite('MainViewModel', function() {
        setup(function() {
        // ...
        });
    

        suite('clickReserved', function() {
            test('should return false when the phoneNumber is invalid', function() {
                let mainViewModel = new MainViewModel(ko, null);

                mainViewModel.phoneNumber('+79109400605');
                mainViewModel.nameUser('Stas');
                mainViewModel.numberGuests(2);
                mainViewModel.clickToday();
                mainViewModel.time('v16.10');

                mainViewModel.clickReserved();
                console.log("55-" + mainViewModel.isFail);
                assert.isFalse(mainViewModel.isFail);
            });
        });
    });
    
});



