define(function () {
    function ReservProcess(apiClient) {
        'use strict';
        var self = this;


        this.makeReserv = function(reservedInfo) { 

            let today = new Date();
            let startDateTime = new Date(today.getFullYear(), reservedInfo.numberMonth, reservedInfo.numberDay, reservedInfo.numberHours, reservedInfo.numberMinutes);
            let finishHours = Number(reservedInfo.numberHours) + Number(reservedInfo.duration);
            let finishDateTime = new Date(today.getFullYear(), reservedInfo.numberMonth, reservedInfo.numberDay, finishHours, reservedInfo.numberMinutes);

            let asd = [    
                        {
                            nubmerPhone : reservedInfo.phoneNumber,
                            startDateTimeReserv : startDateTime,
                            finishDateTimeReserv : finishDateTime,
                            registrationName : reservedInfo.nameUser,
                            numberGuests : reservedInfo.numberGuests,
                            comment : reservedInfo.comment,
                            reservationStatus : 2 // Verification
                        }
                      ];
            let tableInfo = {
                numberTable : reservedInfo.numberTable,
                isPS4 : reservedInfo.isPS4Table,
                reservedInfoList : asd
            };

            RequestToApi(tableInfo);
        };
        

        function RequestToApi(tableInfo) {
            
            console.log("RequestToApi ..... -> apiClient");

            apiClient.setTableReservedInfo(tableInfo);
        }
    }
    return ReservProcess;
});