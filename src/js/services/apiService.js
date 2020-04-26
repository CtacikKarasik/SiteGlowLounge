define(["jquery"], function($) {

    function ApiClient() {
        'use strict';

        this.setTableReservedInfo = function(tableInfo){
            return requestToApi('https://localhost:44374/' + 'api/reserved', tableInfo);
        };
        
        function requestToApi(apiUrl, tableInfo) {
            var requestParams = {
                dataType: 'json',
                type: 'POST',
                url: apiUrl,
                data: JSON.stringify(tableInfo),
                headers: { 'Access-Control-Allow-Origin': 'http://localhost' },
            };

            return $.ajax(requestParams);
        };
    }

return ApiClient;
});