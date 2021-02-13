define(['knockout.min', 
        'control/vm/СontrolPanelViewModel.min'
        ], function() {
    'use strict';

    var ko = require('knockout.min');
    var СontrolPanelViewModel = require('control/vm/СontrolPanelViewModel.min'); 

    function main() {     
   
        var controlPanelViewModel = new СontrolPanelViewModel(ko);

        ko.applyBindings(controlPanelViewModel);
    }

    main()
 });