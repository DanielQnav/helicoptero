$(document).ready(function () {
    var myaudio = new Audio('css/helicoptero-efectos-de-sonido.mp3');

    $('#up').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({top: '-=50px'});
        myaudio.play();
    });

    $('#down').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({top: '+=50px'});
        myaudio.play();
    });

    $('#left').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({left: '-=50px'});
        myaudio.play();
    });

    $('#rigth').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({left: '+=50px'});
        myaudio.play();
    });
    $('#centrar').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({top: '0px', left: '0px'});
        myaudio.pause();
    });

    $('#normal').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({height: '80%', width: '100%'});
        myaudio.pause();
    });

    $('#agrandar').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({height: '+=50px', width: '+=50px'});
    });

    $('#achicar').click(function (e) { 
        e.preventDefault();
        $('.imagen').animate({height: '-=50px', width: '-=50px'});
    });

    $('#aparece').click(function (e) { 
        e.preventDefault();
        $('.imagen').show(4);
    });

    $('#desaparece').click(function (e) { 
        e.preventDefault();
        $('.imagen').hide(4);
        myaudio.pause();
    });

    /*$(document).ready(function () {
        function reorient(e) {
          var landscape = (window.orientation % 180 == 0);
          $("body > div").css("-webkit-transform", !landscape ? "rotate(-90deg)" : "");
        }
        window.onorientationchange = reorient;
        window.setTimeout(reorient, 0);
      });*/
    
});