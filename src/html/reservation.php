
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
            <button class="button_new" data-info-table="1" data-ps-table="true" data-bind="click: selectTable">
                <span>Tab №1</span>
            </button>
            <div class="button" class="idButton1" data-info-table="2" data-ps-table="true" data-bind="click: selectTable">reserv1</div>
            <div class="button" class="idButton2" data-info-table="3" data-ps-table="true" data-bind="click: selectTable">reserv2</div>
            <div class="button" class="idButton3" data-info-table="4" data-ps-table="false" data-bind="click: selectTable">reserv3</div>
        </div>
        <div class="row_reserv2">
            <div class="button" class="idButton4" data-info-table="5" data-ps-table="false" data-bind="click: selectTable">reserv4</div>
            <div class="button" class="idButton5" data-info-table="6" data-ps-table="false" data-bind="click: selectTable">reserv5</div>
            <div class="button" class="idButton6" data-info-table="7" data-ps-table="false" data-bind="click: selectTable">reserv6</div>
        </div>
        <div class="row_reserv3">
            <div class="button" class="idButton7" data-info-table="8" data-ps-table="false" data-bind="click: selectTable">reserv7</div>
            <div class="button" class="idButton8" data-info-table="9" data-ps-table="false" data-bind="click: selectTable">reserv8</div>
            <div class="button" class="idButton9" data-info-table="10" data-ps-table="false" data-bind="click: selectTable">reserv9</div>
        </div>
    </div>

    <div class="service__form" style="display: none;">
        <div class="service__inputs">
            <div class="input_phone_number">
                <label>Номер телефона</label>
                <input type="text" name="phoneNumber" id="phoneNumber" placeholder="+7 999 888 77 66" data-bind="value: phoneNumber">
            </div>
            <div class="input_name">
                <label>Ваше имя</label>
                <input type="text" name="nameUser" id="nameUser" placeholder="имя" data-bind="value: nameUser">
            </div>

            <div class="number_startTime">
                <div class="number_month">
                    <label>Месяц</label>
                    <input type="number" id="numberMonth" min="1" max="12" step="1" data-bind="value: numberMonth">
                </div>
                <div class="number_day">
                    <label>День</label>
                    <input type="number" id="numberDay" min="1" max="31" step="1" data-bind="value: numberDay">
                </div>
                <div class="number_hours">
                    <label>Время</label>
                    <input type="number" id="numberHour" min="0" max="23" step="1" data-bind="value: numberHours">
                </div>
                <div class="number_minutes">
                    <input type="number" id="numberMinute" min="0" max="50" step="10" data-bind="value: numberMinutes">
                </div>
            </div>

            <div class="slide_durationReserved">
                <label>Длительность</label>
                <input type="range" min="1" max="5" class="sliderDuration" id="sliderDuration" data-bind="value: duration">
                <output id="ong" for="sliderDuration" data-bind="value: duration"></output>
            </div>
            <div class="slide_numberGuests">
                <label>Количество гостей</label>
                <input type="range" min="1" max="20" class="sliderGuests" id="sliderGuests" data-bind="value: numberGuests">
                <output id="ong" for="sliderGuests" data-bind="value: numberGuests"></output>
            </div>
            <div class="input_comment">
                <label>Комментарий к заказу</label>
                <input type="text" name="comment" id="comment" placeholder="..." data-bind="value: comment">
            </div>
            <div class="button_reserved">
                <button class="button_new" data-bind="click: clickReserved">
                  <span>Забронировать</span>
                </button>
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