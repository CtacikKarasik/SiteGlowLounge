define(['chai', 'js/knockout.min', 'vm/MainViewModel.min', 'test/fake/apiServiceFake.js'], function (chai, ko, MainViewModel, ApiServiceFake) {
    'use strict';

    let assert = chai.assert;
    let expect = chai.expect;

    let mainViewModel;


    suite('MainViewModel', function() {
        setup(function() {
            let apiServiceFake = new ApiServiceFake(true);
            mainViewModel = new MainViewModel(ko, apiServiceFake);
        });
    
        suite('clickReserved', function() {

            const validPhoneNumber = ['+79109400605', '89109400605'];
            validPhoneNumber.forEach(phoneNumber => {
                test(`should reservation when the phone number: ${phoneNumber} - is valid`, function() {
                    mainViewModel.phoneNumber(phoneNumber);
                    mainViewModel.nameUser('Stas');
                    mainViewModel.numberGuests(2);
                    mainViewModel.clickToday();
                    mainViewModel.time('v16.10');

                    mainViewModel.clickReserved();

                    assert.isTrue(mainViewModel.isInvalidPhoneNumber() == 'none');
                });
            });

            const invalidPhoneNumber = ['79109400605', '9109400605','1233','gf1565gfgf', '4564f6887','8915940060+'];
            invalidPhoneNumber.forEach(phoneNumber => {
                test(`not should reservation when the phone number: ${phoneNumber} - is invalid`, function() {
                    mainViewModel.phoneNumber(phoneNumber);
                    mainViewModel.nameUser('Stas');
                    mainViewModel.numberGuests(2);
                    mainViewModel.clickToday();
                    mainViewModel.time('v16.10');

                    mainViewModel.clickReserved();

                    assert.isFalse(mainViewModel.isInvalidPhoneNumber() == 'none');
                });
            });

            const validNameUser = ['Stas', 'Стас','stasik','VaSilyI', 'Stas-stas'];
            validNameUser.forEach(nameUser => {
                test(`should reservation when the name user: ${nameUser} - is valid`, function() {
                    mainViewModel.phoneNumber('+79109400605');
                    mainViewModel.nameUser(nameUser);
                    mainViewModel.numberGuests(2);
                    mainViewModel.clickToday();
                    mainViewModel.time('v16.10');

                    mainViewModel.clickReserved();

                    assert.isTrue(mainViewModel.isInvalidNameUser() == 'none');
                });
            });

            const invalidNameUser = ['Di', 'Stas1','123Fred','Sta2t', 'St+as'];
            invalidNameUser.forEach(nameUser => {
                test(`not should reservation when the name user: ${nameUser} - is invalid`, function() {
                    mainViewModel.phoneNumber('+79109400605');
                    mainViewModel.nameUser(nameUser);
                    mainViewModel.numberGuests(2);
                    mainViewModel.clickToday();
                    mainViewModel.time('v16.10');

                    mainViewModel.clickReserved();

                    assert.isFalse(mainViewModel.isInvalidNameUser() == 'none');
                });
            });

            const validTime = [ '15.45','01:55','23:59','4.30','К17.20',
                                'в6:20','В2,20','к3:20','К7.20',
                                'v1:20','V2,20','k3:20','K8.20',
                                'выав 16:20',' 06-20','16:20 аыва','в16;20 ыв 102','16:20аыва'];
            validTime.forEach(time => {
                test(`should reservation when the time: ${time} - is valid`, function() {
                    mainViewModel.phoneNumber('+79109400605');
                    mainViewModel.nameUser('Stas');
                    mainViewModel.numberGuests(2);
                    mainViewModel.clickToday();
                    mainViewModel.time(time);

                    mainViewModel.clickReserved();

                    assert.isTrue(mainViewModel.isInvalidTime() == 'none');
                });
            });

            const invalidTime = [   "15=45",'01*55','33:59','4.60',
                                    'д6:20','Е1,20','n2:20','R1.20',
                                    '1F6:20',' 06$20','в16:2fd0'];
            invalidTime.forEach(time => {
                test(`not should reservation when the time: ${time} - is invalid`, function() {
                    mainViewModel.phoneNumber('+79109400605');
                    mainViewModel.nameUser('Stas');
                    mainViewModel.numberGuests(2);
                    mainViewModel.clickToday();
                    mainViewModel.time(time);

                    mainViewModel.clickReserved();

                    assert.isFalse(mainViewModel.isInvalidTime() == 'none');
                });
            });
            
        });
    });
    
});



