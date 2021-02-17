define(['knockout.min',
        'control/services/apiService.min',
        'control/vm/СontrolPanelViewModel.min'
        ], function() {
    'use strict';

    var ko = require('knockout.min');
    var СontrolPanelViewModel = require('control/vm/СontrolPanelViewModel.min'); 
    var ApiService = require('control/services/apiService.min');

    function main() {     
        var apiService = new ApiService();
        var controlPanelViewModel = new СontrolPanelViewModel(ko, apiService);

        ko.applyBindings(controlPanelViewModel);
    }

    main()
 });