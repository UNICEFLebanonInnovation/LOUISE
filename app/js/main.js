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

    if ($(window).width() < 768) {
        $('.playOverlay').click(function() {
            var tl2 = new TimelineLite();
            tl2.to($('.quotePopup'), 0.1, { className: "+=shown" });
            tl2.to($('.quoteHolder'), 0.5, { x: -200, ease: Circ.easeOut });
            tl2.to($('.quoteOverlay'), 0.5, { opacity: 1, ease: Circ.easeOut }, "-=0.6");
            tl2.to($('.quoteModal'), 0.5, { width: "300px", padding: "20px", ease: Circ.easeOut }, "-=0.6");
            tl2.to($('.quoteModal p'), 0.5, { opacity: 1, ease: Circ.easeOut }, "-=0");
        });
        $('.quoteOverlay').click(function() {
            var tl2 = new TimelineLite();
            tl2.to($('.quoteModal p'), 0.5, { opacity: 0, ease: Circ.easeOut });
            tl2.to($('.quoteModal'), 0.5, { width: "0px", padding: "0px", ease: Circ.easeOut });
            tl2.to($('.quoteOverlay'), 0.5, { opacity: 0, ease: Circ.easeOut }, "-=0.6");
            tl2.to($('.quoteHolder'), 0.5, { x: 0, ease: Circ.easeOut }, "-=0.5");
            tl2.to($('.quotePopup'), 0.1, { className: "-=shown" });
        });
    } else {
        $('.playOverlay').click(function() {
            var tl2 = new TimelineLite();
            tl2.to($('.quotePopup'), 0.1, { className: "+=shown" });
            tl2.to($('.quoteHolder'), 0.5, { x: -200, ease: Circ.easeOut });
            tl2.to($('.quoteOverlay'), 0.5, { opacity: 1, ease: Circ.easeOut }, "-=0.6");
            tl2.to($('.quoteModal'), 0.5, { width: "500px", padding: "100px", ease: Circ.easeOut }, "-=0.6");
            tl2.to($('.quoteModal p'), 0.5, { opacity: 1, ease: Circ.easeOut }, "-=0");
        });
        $('.quoteOverlay').click(function() {
            var tl2 = new TimelineLite();
            tl2.to($('.quoteModal p'), 0.5, { opacity: 0, ease: Circ.easeOut });
            tl2.to($('.quoteModal'), 0.5, { width: "0px", padding: "0px", ease: Circ.easeOut });
            tl2.to($('.quoteOverlay'), 0.5, { opacity: 0, ease: Circ.easeOut }, "-=0.6");
            tl2.to($('.quoteHolder'), 0.5, { x: 0, ease: Circ.easeOut }, "-=0.5");
            tl2.to($('.quotePopup'), 0.1, { className: "-=shown" });
        });
    }
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