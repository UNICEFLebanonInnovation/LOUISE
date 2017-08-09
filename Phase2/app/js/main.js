$(window).load(function() {
    //PREALODER INIT
    $('.preloader').fadeOut();
    //Skroll init
    skrollrInit();
    //FULL HEIGHT FIRST SCREEN FUNCTION CALL
    firstScreenFull();
    //PARALLAX FIRST SCREEN OM MOUSE WHEEL FUNCTION
    $('#scene').parallax();

    //TIMELINE ANIMATION FOR FIRST SCREEN
    var tl = new TimelineLite();
    tl.to('#scene', 1, { y: 300 }, "-=1.8");
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
        $('.fa-search').click(function() {
            $('body').toggleClass('fixedScroll');
            $('.hideForSearch').fadeToggle();

        });
    }
}
//FULL HEIGHT FIRST SCREEN FUNCTION
function firstScreenFull() {
    var windowHeight = $(window).height();
    $('.firstScreen').height(windowHeight);
}