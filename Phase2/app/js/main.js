$(window).load(function() {
    //PREALODER INIT
    $('.preloader').fadeOut();
    //DETECT SMALL SCREENS
    if ($(window).width() < 768) {} else {
        skrollr.init({
            smoothScrolling: true
        });
    }
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
});
$(document).ready(function() {
    $('.js-tilt').tilt({});
});
//FULL HEIGHT FIRST SCREEN FUNCTION
function firstScreenFull() {
    var windowHeight = $(window).height();
    $('.firstScreen').height(windowHeight);
}