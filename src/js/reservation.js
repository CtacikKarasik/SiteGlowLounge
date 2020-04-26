define(['knockout', 
        'vm/MainViewModel',
        'services/apiService',
        'services/reservProcess'
        ], function() {
    'use strict';

    var ko = require('knockout');
    var MainViewModel = require('vm/MainViewModel');
    var ApiService = require('services/apiService');
    var ReservProcess = require('services/reservProcess');
    

    function main() {     
        
        var apiService = new ApiService();
        var reservProcess = new ReservProcess(apiService);     
        var mainViewModel = new MainViewModel(ko, reservProcess);

        ko.applyBindings(mainViewModel);
    }

    main()
 });