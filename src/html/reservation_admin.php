
<!DOCTYPE html>
<html>

<head>
    <meta charset="=utf-8">
    <title>Glow Lounge</title>

    <link href="../img/favicon/favicon.ico" rel="shorcut icon" type="image/x-icon">

    <script type="text/javascript" src="../js/common.min.js"></script>

</head>

<body>
    <div class="header">
        <form>
            <p>
                <label for="startDateTime">StartDateTime: </label>
                <input type="date" id="startDateTime" name="startDateTime" data-bind="value: startDate"/>
            </p>
            <p>
                <label for="endDateTime">EndDateTime: </label>
                <input type="date" id="endDateTime" name="endDateTime" data-bind="value: endDate"/>
            </p>
            <p>
                <button type="button" data-bind="click: clickGetListReservedTablesButton">Отправить</button>
            </p>
        </form>
        
    </div>
    <textarea type="text" name="time" id="time" placeholder="" rows="100" style="margin: 0px; width: 1025px; height: 209px;" data-bind="value: response"></textarea>
    
    
    <div class="informations">
        <reservation-list></reservation-list>
    </div>

</div>
</body>

</html>