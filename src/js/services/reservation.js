define(['knockout', 'vm/MainViewModel'], function() {

    var ko = require('knockout');
    var MainViewModel = require('vm/MainViewModel');
    

    function main() {       
        var mainViewModel = new MainViewModel(ko);

        ko.applyBindings(mainViewModel);
    }

    main()
 });