

define(function () {
    'use strict';

    function BlockReservInfoViewModel(ko) {
        var self = this;

        self.reservList = ko.observableArray();

        this.setReservedList = function(reservInfolist) {
            for(let i = 0; i < reservInfolist.length; i++) {
                self.reservList.push( { status: reservInfolist[i].status,
                                        name: reservInfolist[i].name,
                                        phone: reservInfolist[i].phone,
                                        time: reservInfolist[i].time,
                                        guests: reservInfolist[i].guests,
                                        isPS4: reservInfolist[i].ps4,
                                        comment: reservInfolist[i].comment });
            }
        };
    }

    return BlockReservInfoViewModel;
});