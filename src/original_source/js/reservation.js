define(['knockout.min', 
        'vm/MainViewModel.min',
        'services/apiService.min',
        'services/reservProcess.min'
        ], function() {
    'use strict';

    var ko = require('knockout.min');
    var MainViewModel = require('vm/MainViewModel.min');
    var ApiService = require('services/apiService.min');
    var ReservProcess = require('services/reservProcess.min');
    

    function main() {     
        
        var apiService = new ApiService();
        var reservProcess = new ReservProcess(apiService);     
        var mainViewModel = new MainViewModel(ko, apiService);

        ko.applyBindings(mainViewModel);
    }

    main()
 });