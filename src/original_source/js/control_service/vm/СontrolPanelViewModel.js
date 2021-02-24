define(['control/model/reservInfo.min'], function () {
    function СontrolPanelViewModel(ko, apiService, blockReservInfoViewModel) {
        'use strict';
        var ReservInfo = require('control/model/reservInfo.min');          

        var self = this;

        self.startDate = ko.observable(new Date());
        self.endDate = ko.observable(new Date());

        self.response = ko.observable("...");
        

        this.clickGetListReservedTablesButton = function() {
            var apiResponsePromise = apiService.getListReservedTables(self.startDate(), self.endDate());
            
            apiResponsePromise.done(function (data, textStatus, jqXHR) {
                SuccessResponse(data);
            });
        
            apiResponsePromise.fail(function (jqXHR, textStatus) {
                self.response("fail");
            });
        };

        function SuccessResponse(data) {
            if(data.length != 0) {
                let reservInfoArray = [];
                for(let i = 0; i < data.length; i++) {
                    reservInfoArray.push(new ReservInfo(data[i]));
                }
                blockReservInfoViewModel.setReservedList(reservInfoArray);
            }
        }
    
        
    }
    return СontrolPanelViewModel;
});