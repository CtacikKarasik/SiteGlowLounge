define(function () {
    function MainViewModel(ko, reservProcess) {
        'use strict';
        var self = this;

        self.isVisibleReserv = ko.observable(true);
        self.isVisibleCall = ko.observable(false);
        self.colorReserv = ko.observable('#fff');
        self.colorCall = ko.observable('#0b182b');


        self.colorToday = ko.observable('#0b182b');
        self.backgrToday = ko.observable('#9fcfe2');
        self.fontSizeToday = ko.observable('32px');
        self.colorTomorrow = ko.observable('#9fcfe2');
        self.backgrTomorrow = ko.observable('#0b182b');
        self.fontSizeTomorrow = ko.observable('24px');


        self.phoneNumber = ko.observable("+7 (910) 790-78-80");
        self.nameUser = ko.observable("Имя...");
        self.isInvalidPhoneNumber = ko.observable('none');
        self.isInvalidNameUser = ko.observable('none');

        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();
        let currentHours = currentDate.getHours();
        currentHours = currentHours + 2;

        self.numberMonth = ko.observable(currentMonth + 1);
        self.numberDay = ko.observable(currentDay);
        self.numberHours = ko.observable(currentHours);
        self.numberMinutes = ko.observable('00');

        self.isVisibleQuestion = ko.observable(true);
        self.isVisiblePlus = ko.observable(false);
        let isPS4 = false;
        self.duration = ko.observable(2);
        self.numberGuests = ko.observable(2);
        self.time = ko.observable("Во сколько вас ждать?");


        this.ClickOnInputPhoneNumber = function() {
            self.isInvalidPhoneNumber('none');
            if(self.phoneNumber() == "+7 (910) 790-78-80")
             {
                 self.phoneNumber("");
             }
        }
        this.ClickOnInputNameUser = function() {
            self.isInvalidNameUser('none');
            if(self.nameUser() == "Имя...")
             {
                self.nameUser("");
             }
        }

        this.ClickOnInputTime = function() {
            if(self.time() == "Во сколько вас ждать?")
             {
                self.time("");
             }
        }

        this.clickMinusDur = function() {
            if(self.duration() > 1) {
                let value = self.duration() - 1;
                self.duration(value);
            } else if(self.duration() === '5 +') {
                self.duration(5);
            }
        }
        this.clickPlusDur = function() {
            if(self.duration() < 5) {
                let value = self.duration() + 1;
                self.duration(value);
            } else {
                self.duration('5 +');
            }
        }
        this.clickMinusGuest = function() {
            if(self.numberGuests() > 1) {
                let value = self.numberGuests() - 1;
                self.numberGuests(value);
            } else if(self.numberGuests() === '10 +') {
                self.numberGuests(10);
            }
        }
        this.clickPlusGuest = function() {
            if(self.numberGuests() < 10) {
                let value = self.numberGuests() + 1;
                self.numberGuests(value);
            } else {
                self.numberGuests('10 +');
            }
        }

        this.CopyNumber = function() {
            var text = document.getElementById("copy_number_input");
            text.value = '+7 (910) 790-78-80';
            text.select();    
            try {
                document.execCommand('copy');
            } catch (err) {
                throw new Error('Didnt work :(');
            }
        };

        this.clickIsPS4 = function() { 
            if(!isPS4) {
                self.isVisibleQuestion(false);
                self.isVisiblePlus(true);
                isPS4 = true; 
            } else {
                self.isVisibleQuestion(true);
                self.isVisiblePlus(false);
                isPS4 = false; 
            }
        };

        this.clickToday = function() { 
            self.colorToday('#0b182b');
            self.backgrToday('#9fcfe2');
            self.colorTomorrow('#9fcfe2');
            self.backgrTomorrow('#0b182b');
            self.fontSizeToday('35px');  
            self.fontSizeTomorrow('24px');  
        };

        this.clickTomorrow = function() { 
            self.colorToday('#9fcfe2');
            self.backgrToday('#0b182b');
            self.colorTomorrow('#0b182b');
            self.backgrTomorrow('#9fcfe2');  
            self.fontSizeToday('24px');  
            self.fontSizeTomorrow('35px');  
        };
       
        this.clickReservBut = function() { 
            self.colorReserv('#fff');
            self.colorCall('#0b182b');
            self.isVisibleCall(false);
            self.isVisibleReserv(true);
            
        };

        this.clickCallBut = function() { 
            self.colorReserv('#0b182b');
            self.colorCall('#fff');
            self.isVisibleReserv(false);
            self.isVisibleCall(true);
        };

        this.clickReserved = function() { 
            if(isValidData()) {
                let ReservedInfo = {
                    isPS4 : isPS4,
                    phoneNumber : self.phoneNumber(),
                    nameUser : self.nameUser(),
                    numberGuests : self.numberGuests(),
                    dateReserv: '',
                    timeReserv: '',
                    comment: ''
                };
                RequestToApi(ReservedInfo);
                //reservProcess.makeReserv(ReservedInfo);
            } else {
                console.log("Show error popup .....");
            }
        };
        

        function RequestToApi(ReservedInfo) {
            
            console.log('isPS4:' + ReservedInfo.isPS4 +"|"+ 
                        'phoneNumber:' + ReservedInfo.phoneNumber +"|"+ 
                        'nameUser:' + ReservedInfo.nameUser +"|"+ 
                        'dateReserv:' + ReservedInfo.dateReserv +"|"+
                        'timeReserv:' + ReservedInfo.timeReserv +"|"+ 
                        'duration:' + ReservedInfo.duration +"|"+ 
                        'comment:' + ReservedInfo.comment );
            console.log("RequestToApi .....");
        }

        function isValidData() {
            
            if(isValidPhoneNumber() && isValidNameUser()) {
                return true;
            }

            return false;
        }

        function isValidPhoneNumber() {
            const phoneRegex1 = new RegExp('^8[0-9]{10}'); 
            const phoneRegex2 = new RegExp('^\\+7[0-9]{10}'); 

            if(phoneRegex1.test(self.phoneNumber())) {
                return true;
              } if (phoneRegex2.test(self.phoneNumber())) {
               
                self.phoneNumber(self.phoneNumber().replace(/^\+7/, '8'));

                return true;
              }
              else {
                self.isInvalidPhoneNumber('0px 0px 3px 5px red');
                return false;
              }
        }

        function isValidNameUser() {
            const nameUserRegex = new RegExp("[a-zA-Zа-яА-Я\-.,][^0-9_!?+=@#$(){}<>;:]{3,}$"); 

            if(nameUserRegex.test(self.nameUser())) {
                console.log("True №1....." + self.nameUser());
                return true;
              } else {
                console.log("False ....." + self.nameUser());
                self.isInvalidNameUser('0px 0px 3px 5px red');
                return false;
              }
        }
    }
    return MainViewModel;
});
