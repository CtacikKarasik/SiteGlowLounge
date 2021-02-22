define(function () {
    function СontrolPanelViewModel(ko, apiService) {
        'use strict';
        var self = this;

        self.startDate = ko.observable(new Date());
        self.endDate = ko.observable(new Date());

        self.response = ko.observable("...");    

        this.clickGetListReservedTablesButton = function() {
            var apiResponsePromise = apiService.getListReservedTables(self.startDate(), self.endDate());
            
            apiResponsePromise.done(function (data, textStatus, jqXHR) {
                self.response(data);
            });
        
            apiResponsePromise.fail(function (jqXHR, textStatus) {
                self.response("fail");
            });
        };
    
        
    }
    return СontrolPanelViewModel;
});