define(function () {
    function MainViewModel(ko, reservProcess) {
        'use strict';
        var self = this;

        self.isValidPhoneNumber = ko.observable(false);
        self.isInValidPhoneNumber = ko.observable(false);
        self.phoneNumber = ko.observable("+7 999 888 77 66");

        self.nameUser = ko.observable("...");

        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();
        let currentHours = currentDate.getHours();
        currentHours = currentHours + 2;

        self.numberMonth = ko.observable(currentMonth + 1);
        self.numberDay = ko.observable(currentDay);
        self.numberHours = ko.observable(currentHours);
        self.numberMinutes = ko.observable('00');

        self.duration = ko.observable(2);
        self.numberGuests = ko.observable(2);
        self.comment = ko.observable("...");

        
       
        this.selectTable = function() { 
            self.numberTable = 1; //this.getAttribute('data-info-table');
            self.isPS4Table = true; //this.getAttribute('data-ps-table');
            document.querySelector(".service__form").style.display = "flex"; 
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
