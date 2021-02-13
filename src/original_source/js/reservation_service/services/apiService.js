define(["jquery"], function($) {

    function ApiClient() {
        'use strict';

        this.setTableReservedInfo = function(tableInfo) {
            return requestToApi('http://localhost:3070/' + 'api/reserved', tableInfo);
        };
        
        function requestToApi(apiUrl, tableInfo) {
            var requestParams = {
                type: 'POST',
                url: apiUrl,
                data: JSON.stringify(tableInfo),
                headers: { 'Content-Type': 'application/json', 'X-Cache-Header': 'f6b2507a6a3f'  },
                timeout: 20000
            };

            return $.ajax(requestParams);
        };
    }

return ApiClient;
});