$(window).load(function() {
    //PREALODER INIT
    $('.preloader').fadeOut();
    //Skroll init
    skrollrInit();
    //FULL HEIGHT FIRST SCREEN FUNCTION CALL
    firstScreenFull();
    //PARALLAX FIRST SCREEN OM MOUSE WHEEL FUNCTION
    $('#scene').parallax();


    $('.videoPopup .fa-close').click(function() {
        $('.videoPopup').fadeOut();
        $('.videoPopup iframe').attr('src', '');
    });
});
$(window).resize(function() {
    //FULL HEIGHT FIRST SCREEN FUNCTION CALL
    firstScreenFull();
    //Skroll init
    skrollrInit();
});
$(document).ready(function() {
    skrollrInit();
    $('.burgerMenu').click(function() {
        $('nav').slideToggle();
    });
    $('.tiltEffect').tilt({
        maxTilt: 4,
    });
    $('.cardTilt').tilt({
        reset: false,
        maxTilt: 30,
        perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
    });
    $('.cardBtn').click(function() {
        $('html,body').animate({ scrollTop: $(".cardHolder").offset().top }, 1000);
    });
    $('.exploreBtn').click(function() {
        $('html,body').animate({ scrollTop: $(".timelineHolder").offset().top - 100 }, 1000);
    });
    $('.qaButton a').click(function() {
        $(this).parent().parent().parent().find($('.qaExpandableArea')).slideToggle();
        $(this).toggleClass('opened');
        if ($(this).hasClass('opened')) {
            $(this).html('Collapse <span class="linkAnim"></span>')
        } else {
            $(this).html('Expand <span class="linkAnim"></span>')
        }
    });
    $('.fa-search').click(function() {
        $('body').toggleClass('fixedScroll');
        $('.hideForSearch').fadeToggle();
        $('.searchPopup').fadeToggle();
    });
});

//SCKROLLR INIT 
function skrollrInit() {
    if ($(window).width() < 1025) {

        $('.circle-container ul li').click(function() {


        });
    } else {
        skrollr.init({
            smoothScrolling: true,
            forceHeight: false
        });

    }
}
//FULL HEIGHT FIRST SCREEN FUNCTION
function firstScreenFull() {
    var windowHeight = $(window).height();
    $('.firstScreen').height(windowHeight);
}

function playVideo() {
    var frameSrc = $('.playVideo').attr('data-video');
    $('.videoPopup').fadeIn();
    $('.videoPopup iframe').attr('src', frameSrc);
};