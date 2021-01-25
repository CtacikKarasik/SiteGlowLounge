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

        self.isVisibleQuestion = ko.observable(true);
        self.isVisiblePlus = ko.observable(false);
        let isPS4 = false;
        self.duration = ko.observable(2);
        self.numberGuests = ko.observable(2);
        self.time = ko.observable("Во сколько вас ждать?");
        self.isInvalidTime = ko.observable('none');
        let timeReserv = '';
        let comment = '';
        let dateReserv = 'today';

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
            self.isInvalidTime('none');
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
            dateReserv = 'today';
        };

        this.clickTomorrow = function() { 
            self.colorToday('#9fcfe2');
            self.backgrToday('#0b182b');
            self.colorTomorrow('#0b182b');
            self.backgrTomorrow('#9fcfe2');  
            self.fontSizeToday('24px');  
            self.fontSizeTomorrow('35px');  
            dateReserv = 'tomorrow';
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
                    dateReserv: dateReserv,
                    timeReserv: timeReserv,
                    comment: comment
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
                        'numberGuests:' + ReservedInfo.numberGuests +"|"+ 
                        'comment:' + ReservedInfo.comment );
            console.log("RequestToApi .....");
        }

        function isValidData() {
            if(isValidPhoneNumber() && isValidNameUser() && isValidTime()) {
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
            const nameUserRegex = new RegExp("^[^0-9_!?+=@#$(){}<>;:][a-zA-Zа-яА-Я\-.,]{3,}$"); 

            if(nameUserRegex.test(self.nameUser())) {
                return true;
              } else {
                self.isInvalidNameUser('0px 0px 3px 5px red');
                return false;
              }
        }

        function isValidTime() {
            const timeRegex1 = new RegExp("(?:0[0-9]|1[0-9]|2[0-3])[:.,-; ][0-5][0-9]"); 
            const timeRegex2 = new RegExp("(?:^(?:[0-9])|(?<=[vVkKвВсСкК\ ])(?:[0-9]))[:.,-; ][0-5][0-9]"); 
            const commentRegex = new RegExp('(?<=[:.,-;][0-5][0-9]).+');

            if(self.time().match(timeRegex1)) {
                timeReserv = self.time().match(timeRegex1);
                comment = self.time().match(commentRegex);
                console.log("True №1....." + timeReserv);
                console.log("Comment ....." + comment);
                return true;
              } if(self.time().match(timeRegex2)) {
                    timeReserv = self.time().match(timeRegex2);
                    comment = self.time().match(commentRegex);
                    console.log("Comment ....." + comment);
                    console.log("True №1....." + timeReserv);
                    return true;
                } else {
                    console.log("False ....." + self.time());
                    self.isInvalidTime('0px 0px 3px 5px red');
                    return false;
              }
        }

    }
    return MainViewModel;
});
