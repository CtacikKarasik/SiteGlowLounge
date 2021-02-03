define(function() {

    function ApiClientFake(result) {
        'use strict';

        this.setTableReservedInfo = function() {
            return result;
        };
    }

    return ApiClientFake;
});