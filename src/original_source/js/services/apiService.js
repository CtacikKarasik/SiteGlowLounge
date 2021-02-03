define(["jquery"], function($) {

    function ApiClient() {
        'use strict';

        this.setTableReservedInfo = function(tableInfo) {

            var tmp = {
                isPS4: true, 
                phoneNumber: "89109400605", 
                nameUser: "stas", 
                numberGuests: 4, 
                dateReserv: "today"
            }
            return requestToApi('http://localhost:3070/' + 'api/reserved', tmp);
        };
        
        function requestToApi(apiUrl, tableInfo) {
            var requestParams = {
                type: 'POST',
                url: apiUrl,
                data: JSON.stringify(tableInfo),
                headers: { 'Content-Type': 'application/json' },
            };

            return $.ajax(requestParams);
        };
    }

return ApiClient;
});