requirejs.config({
    'baseUrl': '/js',
    'paths': {
        'jquery': '/js/libs/jquery.min',
        'control': '/js/control_service',
        'reserv': '/js/reservation_service',
    }
});

var lang=requestedPathParts[1];
if(requestedPathParts[1] == 'index.php') {
    requirejs(['reservation_service/reservation.min']);
} else if(requestedPathParts[2] == 'reservation_admin.php') {
    requirejs(['control_service/control_reservation.min']);
} else {
    console.log("Yopss !!!");
}
