
<!DOCTYPE html>
<html>

<head>
    <meta charset="=utf-8">
    <title>Glow Lounge</title>

    <link href="../img/favicon/favicon.ico" rel="shorcut icon" type="image/x-icon">

    <script type="text/javascript" src="../js/common.js"></script>

</head>

<body>
    <div class="header">
        <div class="header_logo">
            <img src="../img/banner1.jpg" alt="baner" title="baner">
        </div>
        <div class="header_titel">Glow-Lounge Bar</div>
        <div class="header_slogan">Glow <br>  Lounge</div>


        
    </div>
    <div class="reservation">     
        <div class="row_reserv1">
            <button class="button_new" data-bind="click: reservationTable">
                <span>Tab №1</span>
            </button>
            <div class="button" class="idButton1" data-bind="click: reservationTable">reserv1</div>
            <div class="button" class="idButton2" data-bind="click: reservationTable">reserv2</div>
            <div class="button" class="idButton3" data-bind="click: reservationTable">reserv3</div>
        </div>
        <div class="row_reserv2">
            <div class="button" class="idButton4" data-bind="click: reservationTable">reserv4</div>
            <div class="button" class="idButton5" data-bind="click: reservationTable">reserv5</div>
            <div class="button" class="idButton6" data-bind="click: reservationTable">reserv6</div>
        </div>
        <div class="row_reserv3">
            <div class="button" class="idButton7" data-bind="click: reservationTable">reserv7</div>
            <div class="button" class="idButton8" data-bind="click: reservationTable">reserv8</div>
            <div class="button" class="idButton9" data-bind="click: reservationTable">reserv9</div>
        </div>
    </div>

    <div class="service__form" style="display: none;">
        <div class="service__inputs">
            <div class="input_phone_number">
                <label>Номер телефона</label>
                <input type="text" name="phoneNumber" id="phoneNumber" placeholder="+7 999 888 77 66" data-bind="value: phoneNumber">
                
            </div>
        </div>
    </div>
</div>


    <footer>
        <div class="social">
            <a href="https://vk.com/glownn" title="Группа Вк" target="_blank">
                <img src="../img/vk.png" alt="Bк" title="Bк">
            </a>
            <a href="https://www.instagram.com/Glow_nn" title="instagram" target="_blank">
                <img src="../img/instagram.png" alt="instagram" title="instagram">
            </a>
        </div>
        <div class="rights">
            All rights reserved &copy; <?php echo date ('Y')?>
        </div>
    </footer>
</body>

</html>