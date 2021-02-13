
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
                <input type="date" id="startDateTime" name="startDateTime"/>
            </p>
            <p>
                <label for="endDateTime">EndDateTime: </label>
                <input type="date" id="endDateTime" name="endDateTime"/>
            </p>
            <p>
                <button type="submit">Отправить</button>
            </p>
        </form>
        
    </div>
    <textarea type="text" name="time" id="time" placeholder="" rows="100" style="margin: 0px; width: 1025px; height: 709px;" data-bind="value: response"></textarea>
                
</div>
</body>

</html>