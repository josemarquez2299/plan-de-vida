$(document).ready(function() {

    $(".plan .meta").hover(function(){
        var imagen = $(this).attr('data-imagen');
        $(".ilustraciones").css("background-image", "url("+imagen+")");
    }, function(){
        $(".ilustraciones").css("background-image", "url(01.jpg)");
    });

    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $('.porcentaje').css('height', scrollPercent +"%");

    $(window).scroll(function() {
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        $('.porcentaje').css('height', scrollPercent +"%");
    });

    $([document.documentElement, document.body]).animate({
        scrollTop: $('.plan > .meta:not(.hecho)').offset().top - 75
    }, 1000);

    $(".plan .meta").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(this).offset().top - 75
        }, 300);
    });

});