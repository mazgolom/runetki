 window.onload = function () {
    var video = document.getElementById('video');
    // var allow = document.getElementById('allow');
    var videoStreamUrl = false;

    // функция которая будет выполнена при нажатии на кнопку захвата кадра


    // navigator.getUserMedia  и   window.URL.createObjectURL (смутные времена браузерных противоречий 2012)
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL.createObjectURL = window.URL.createObjectURL || window.URL.webkitCreateObjectURL || window.URL.mozCreateObjectURL || window.URL.msCreateObjectURL;

    // запрашиваем разрешение на доступ к поточному видео камеры
    navigator.getUserMedia({video: true}, function (stream) {
      // разрешение от пользователя получено
      // скрываем подсказку
      // allow.style.display = "none";
      // получаем url поточного видео
      //   var binaryData = [];
      //   binaryData.push(stream);
      //   videoStreamUrl = window.URL.createObjectURL(new Blob(binaryData, {}));
      // устанавливаем как источник для video
      video.srcObject = stream;
      video.play();

    }, function () {
      console.log('что-то не так с видеостримом или пользователь запретил его использовать :P');
    });
  };