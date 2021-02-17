define(function () {
    function СontrolPanelViewModel(ko, apiService) {
        'use strict';
        var self = this;

        self.startDate = ko.observable(new Date());
        self.endDate = ko.observable(new Date());

        self.response = ko.observable("...");


        this.clickGetListReservedTablesButton = function() {
            apiService.getListReservedTables(self.startDate(), self.endDate());
            /*console.log("response:");
            self.response(resp);*/
        };
        
    }
    return СontrolPanelViewModel;
});