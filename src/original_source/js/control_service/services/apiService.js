"use strict";

define(["jquery"], function ($) {
  function ApiClient() {
    'use strict';

    this.getListReservedTables = function (fromTime, toTime) {
      return requestToApi('http://localhost:3070/' + 'api/reservedinfo' + '?fromTime=' + fromTime + '&toTime=' + toTime);
    };

    function requestToApi(apiUrl) {
      var requestParams = {
        type: 'GET',
        url: apiUrl,
        headers: {
          'X-Cache-Header': 'f6b2507a6a3f'
        },
        timeout: 30000
      };
      return $.ajax(requestParams);
    }

    ;
  }

  return ApiClient;
});