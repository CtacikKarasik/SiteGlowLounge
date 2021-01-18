
<!DOCTYPE html>
<html>

<head>
    <meta charset="=utf-8">
    <title>Glow Lounge</title>

    <link href="css/style.min.css" rel="stylesheet" type="text/css">
    <link href="img/favicon/favicon.ico" rel="shorcut icon" type="image/x-icon">
    <script type="text/javascript" src="../js/common.min.js"></script>
</head>

<body>
    <div class="main">
        <div class="titel">
            <div class="banner">
                <img src="../img/banner_min.png" alt="baner" title="baner">
                <div class="header_titel">Glow-Lounge Bar</div>
            </div>
            <div class="maps_link">
                <a href="#map_glow">
                    <img src="../img/maps1.png" alt="maps" title="maps">
                </a>
                <a href="https://goo.gl/maps/J96sGmgeWzkLtkAg8" title="glow" target="_blank">
                    <div class="maps_link_text">Ул. Минина, 10в</div>
                </a>
            </div>
            <div class="social_link">
                <a href="https://www.instagram.com/Glow_nn" title="instagram" target="_blank">
                    <img src="../img/insta1.png" alt="insta" title="insta">
                </a>
                <a href="https://www.instagram.com/Glow_nn" title="instagram" target="_blank">
                    <div class="social_link_text">@Glow_nn</div>
                </a>
            </div>

        </div>
        <div class="varint_reserv">
            <div>varint_reserv</div>
        </div>
        <div class="reserv">
            <div class="service__form">
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
        <div class="contacts">
            <div class="maps" id="map_glow">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.049364900594!2d44.01281831595295!3d56.32897828071142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4151d4441c085da3%3A0x959207896e8a0678!2sGlow%20Lounge%20Bar!5e0!3m2!1sru!2sru!4v1610959013070!5m2!1sru!2sru" width=100% height=100% frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div class="social">
                <div class="social_link1">
                    <a href="https://vk.com/glownn" title="Группа Вк" target="_blank">
                            <img src="img/vk1.png" alt="Bк" title="Bк">
                    </a>
                    <a href="https://vk.com/glownn" title="Группа Вк" target="_blank">
                        <div class="social_link_text">VK Glow</div>
                    </a>
                </div>
                <div class="social_link2">
                    <a href="https://www.instagram.com/Glow_nn" title="instagram" target="_blank">
                        <img src="img/insta1.png" alt="instagram" title="instagram">
                    </a>
                    <a href="https://www.instagram.com/Glow_nn" title="instagram" target="_blank">
                        <div class="social_link_text">@Glow_nn</div>
                    </a>
                </div>
            </div>
            
        </div>
        <div class="info">
        Glow Lounge Bar
        ▪️Сочный дымный кальян💨
        ▪️3 PS4🎮
        ▪️Кухня от Шеф-Повара🍽
        ▪️Эксклюзивный интерьер⚡️
        </div>
    </div>            
</body>

</html>