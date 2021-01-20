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
        <div class="header_titel">Lounge Bar</div>
      </div>
      <div class="maps_link">
        <a href="#map_glow">
          <img src="../img/maps1.png" alt="maps" title="maps">
        </a>
        <a href="https://goo.gl/maps/J96sGmgeWzkLtkAg8" title="glow" target="_blank">
          <div class="maps_link_text">Ул. Минина, 10в</div>
        </a>
      </div>
      <div class="social_link1">
        <a href="https://vk.com/glownn" title="Группа Вк" target="_blank">
          <img src="img/vk1.png" alt="Bк" title="Bк">
        </a>
        <a href="https://vk.com/glownn" title="Группа Вк" target="_blank">
          <div class="social_link_text" style="margin-top:7px">VK Glow</div>
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
    <div class="stock">
      <div class="stock_text">Заглядывай к нам с 14:00 до 18:00 и мы подарим тебе скидку на целых 25% от общего чека!</div>
    </div>
    <div class="varint_reserv">
      <div class="button_reserv" data-bind="style: { color: colorReserv }, click: clickReservBut">
        Хочу on-line бронирование
      </div>
      <div class="button_call" data-bind="style: { color: colorCall }, click: clickCallBut">
        Хочу позвонить
      </div>
    </div>
    <div class="reserv">
      <div class="service__form" data-bind="visible: isVisibleReserv">
        <div class="service__inputs">
          <form class="decor">
            <div class="form-inner">
              <input type="text" name="phoneNumber" id="phoneNumber" placeholder="+7 999 888 77 66" data-bind="value: phoneNumber">
              <input type="text" name="nameUser" id="nameUser" placeholder="Имя" data-bind="value: nameUser">
              <div class="number_day">
                <button type="button" class="button_today" data-bind="style: { color: colorToday, background: backgrToday, 'font-size': fontSizeToday }, click: clickToday">
                    <span>Сегодня</span>
                </button>
                <button type="button" class="button_tomorrow" data-bind="style: { color: colorTomorrow, background: backgrTomorrow, 'font-size': fontSizeTomorrow }, click: clickTomorrow">
                    <span>Завтра</span>
                </button>
              </div>
              <div class="slide_Reserved"> 
                <label class="titel_duration">Как долго планируете сидеть?</label>
                <div class="reserv_duration">
                    <input type="range" min="1" max="5" class="sliderDuration" id="sliderDuration" data-bind="value: duration">
                    <output id="valueDuration" for="sliderDuration" data-bind="value: duration"></output>
                </div>
                <label class="titel_guests">Сколько будет человек?</label>
                <div class="reserv_guests">
                    <input type="range" min="1" max="10" class="sliderGuests" id="sliderGuests" data-bind="value: numberGuests">
                    <output id="valueGuests" for="sliderGuests" data-bind="value: numberGuests"></output>
                </div>
              </div>
              <div class="footer_Reserved"> 
                <textarea type="text" name="time" id="time" placeholder="Во сколько вас ждать?" rows="2" data-bind="value: time"></textarea>
                <button type="button" class="but_is_question_ps4">
                    <img src="img/question.png" alt="question" title="Хотите стол с PS4?" data-bind="visible: isVisibleQuestion, click: clickIsPS4">
                    <img src="img/plus.png" alt="question" title="Хотите стол с PS4?" data-bind="visible: isVisiblePlus, click: clickIsPS4">
                </button>
                <button type="button" class="but_is_ps4">
                    <img src="img/ps4_3.png" alt="ps4" title="Хотите стол с PS4?" data-bind="click: clickIsPS4">
                </button>
              </div>
              <input type="submit" value="Забронировать" data-bind="click: clickReserved">
            </div>
          </form>
        </div>
      </div>
      <div class="call__form" data-bind="visible: isVisibleCall">
        <div class="call__form_number">
              <input id="copy_number_input" readonly ="">
              <button id='copy_number' data-bind="click: CopyNumber">+7 (910) 790-78-80</button>
        </div>
        <div class="call__form_text">
          Градиент для текста — технология экспериментальная, поддерживается только в браузерах на основе WebKit-движка. Тем не менее, этим приёмом можно свободно пользоваться, а для браузеров, не поддерживающих это свойство, просто задавать цвет текста. Таким образом, браузеры, поддерживающие свойства, отобразят текст с градиентом, а браузеры, не поддерживающие свойство, просто пропустят его в коде и установят для текста заданный цвет.
        </div>
      </div>
    </div>
    <div class="maps" id="map_glow">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.049364900594!2d44.01281831595295!3d56.32897828071142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4151d4441c085da3%3A0x959207896e8a0678!2sGlow%20Lounge%20Bar!5e0!3m2!1sru!2sru!4v1610959013070!5m2!1sru!2sru" width=100% height=100% frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div class="info">
      <div class="info_1">
        <img src="img/kalik1.png" alt="smoke" title="smoke">
        <div class="info_text">SMOKE</div>
      </div>
      <div class="info_2">
        <img src="img/ps4_2.png" alt="ps4" title="ps4">
        <div class="info_text">PS4</div>
      </div>
      <div class="info_3">
        <img src="img/eats1.png" alt="Eats" title="Eats">
        <div class="info_text">Eats</div>
      </div>
    </div>
  </div>
</body>

</html>