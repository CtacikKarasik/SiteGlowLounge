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
        self.colorTomorrow = ko.observable('#9fcfe2');
        self.backgrTomorrow = ko.observable('#0b182b');

        self.isValidPhoneNumber = ko.observable(false);
        self.isInValidPhoneNumber = ko.observable(false);
        self.phoneNumber = ko.observable("+7 999 888 77 66");

        self.nameUser = ko.observable("Имя...");

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
        };

        this.clickTomorrow = function() { 
            self.colorToday('#9fcfe2');
            self.backgrToday('#0b182b');
            self.colorTomorrow('#0b182b');
            self.backgrTomorrow('#9fcfe2');  
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
            let ReservedInfo = {
                numberTable : self.numberTable,
                isPS4Table : self.isPS4Table,
                phoneNumber : self.phoneNumber(),
                nameUser : self.nameUser(),
                numberMonth : self.numberMonth(),
                numberDay : self.numberDay(),
                numberHours : self.numberHours(),
                numberMinutes : self.numberMinutes(),
                duration : self.duration(),
                numberGuests : Number(self.numberGuests()),
                comment : self.comment()
            };
            RequestToApi(ReservedInfo);
            reservProcess.makeReserv(ReservedInfo);
        };
        

        function RequestToApi(ReservedInfo) {
            
            console.log(ReservedInfo.numberTable +"|"+ 
                        ReservedInfo.isPS4Table +"|"+ 
                        ReservedInfo.phoneNumber +"|"+ 
                        ReservedInfo.nameUser +"|"+ 
                        ReservedInfo.numberMonth +"|"+
                        ReservedInfo.numberDay +"|"+ 
                        ReservedInfo.numberHours +"|"+ 
                        ReservedInfo.numberMinutes +"|"+ 
                        ReservedInfo.duration +"|"+ 
                        ReservedInfo.numberGuests +"|"+
                        ReservedInfo.comment );
            console.log("RequestToApi .....");
        }
    }
    return MainViewModel;
});
