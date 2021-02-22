define(['knockout.min',
        'control/services/apiService.min',
        'control/vm/СontrolPanelViewModel.min',
        'components/blockReservInfo/blockReservInfoViewModel.min'
        ], function() {
    'use strict';

    var ko = require('knockout.min');
    var СontrolPanelViewModel = require('control/vm/СontrolPanelViewModel.min'); 
    var ApiService = require('control/services/apiService.min');
    var BlockReservInfoViewModel = require('components/blockReservInfo/blockReservInfoViewModel.min');

    function main() {     
        var apiService = new ApiService();
        var controlPanelViewModel = new СontrolPanelViewModel(ko, apiService);
        var blockReservInfoViewModel = new BlockReservInfoViewModel(ko);


        ko.components.register('reservation-list', {
            viewModel: function() { return blockReservInfoViewModel },
            template: { require: 'text!components/blockReservInfo/blockReservInfoTemplate.html' }
        });

        ko.applyBindings(controlPanelViewModel);
    }

    main()
 });