$(document).ready(function () {

    $('.case-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows : false
    });


    $('.js-button-campaign').click(function() {

        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
        return false;
    });

    $(document).mouseup(function (e) {
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();
        }
        return false;
    });


    $("#phone").mask("+38 0(99) 999-99-99");
});