define(function () {
    function MainViewModel(ko) {
        var self = this;

        self.isValidPhoneNumber = ko.observable(false);
        self.isInValidPhoneNumber = ko.observable(false);
        self.phoneNumber = ko.observable("+7 999 888 77 66");
        console.log("Test !!!");
       
        self.reservationTable = function() { 
            console.log('To do');
            //$(".service__form").show();
            document.querySelector(".service__form").style.display = "flex"; 
            self.isInValidPhoneNumber(true);
        };
        
    }
    return MainViewModel;
});
