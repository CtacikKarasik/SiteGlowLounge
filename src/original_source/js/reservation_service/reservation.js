define(['knockout.min', 
        'reserv/vm/MainViewModel.min',
        'reserv/services/apiService.min',
        'reserv/services/reservProcess.min'
        ], function() {
    'use strict';

    var ko = require('knockout.min');
    var MainViewModel = require('reserv/vm/MainViewModel.min');
    var ApiService = require('reserv/services/apiService.min');
    var ReservProcess = require('reserv/services/reservProcess.min');
    

    function main() {     
        
        var apiService = new ApiService();
        var reservProcess = new ReservProcess(apiService);     
        var mainViewModel = new MainViewModel(ko, apiService);

        ko.applyBindings(mainViewModel);
    }

    main()
 });