define(function () {
    function ReservInfo(reservInfo) {
        this.status = reservInfo.status;
        this.name = reservInfo.username;
        this.phone = reservInfo.numberphone;
        this.time = reservInfo.datereserv;
        this.guests = reservInfo.numberguests;
        this.ps4 = reservInfo.ps4;
        this.comment = reservInfo.comment;
    }
    return ReservInfo;
});