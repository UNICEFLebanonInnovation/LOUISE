$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
$(window).load(function() {

    $('.preloader').fadeOut();

    if ($(window).width() < 768) {

    } else {
        skrollr.init();
    }

    var windowHeight = $(window).height();
    $('.firstScreen').height(windowHeight);

    $(".goToVideo").click(function() {
        $('html,body').animate({
                scrollTop: $(".videoContainer").offset().top - 50
            },
            'slow');
    });
    $('#scene').parallax();

    var tl = new TimelineLite();
    tl.staggerFrom($('.introText1 div'), 1.5, { ease: Expo.easeOut, opacity: 0, y: "400%" }, 0.1);
    tl.staggerTo($('.introText1 div'), 1.5, { ease: Expo.easeOut, opacity: 0, y: "-500%", delay: 4 }, 0.1);
    tl.staggerFrom($('.introText2 div'), 1.5, { ease: Expo.easeOut, opacity: 0, y: "400%" }, 0.1, "-=1");
    tl.staggerTo($('.introText2 div'), 1.5, { ease: Expo.easeOut, opacity: 0, y: "-400%", delay: 4 }, 0.1);
    tl.staggerFrom($('.introText3 div'), 1.5, { ease: Expo.easeOut, opacity: 0, y: "500%" }, 0.1, "-=1");
    tl.staggerTo($('.introText3 div'), 1.5, { ease: Expo.easeOut, opacity: 0, y: "-400%", delay: 4 }, 0.1);
    tl.to($('.blackPattern'), 1.5, { opacity: 0 }, "-=0.3");
    tl.to('#scene', 1, { y: 300 }, "-=1.8");
    tl.to('body', 1, { className: "-=fixedOverflow" }, "-=2.8");
    tl.to($('.blackPattern'), 1.5, { autoAlpha: 0 }, "-=0.3");
    tl.to('.logo', 1, { opacity: 1 }, "-=3.8");
    tl.to('h1', 1, { opacity: 1 }, "-=4.8");
    tl.add("endIntro", 19);
    tl.to($('.skipIntro'), 1.5, { ease: Expo.easeOut, opacity: 0 }, "-=5");
    tl.to($('.skipIntro'), 1.5, { autoAlpha: 0 }, "-=6");
    tl.to($('.goToVideo'), 1.5, { autoAlpha: 1 }, "-=7");
    tl.to($('.goToVideo'), 1.5, { ease: Expo.easeOut, opacity: 1 }, "-=8");




    $('.skipIntro').click(function() {
        tl.play("endIntro");

    });
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
    var windowHeight = $(window).height();
    $('.firstScreen').height(windowHeight);
});

function playVideo() {
    var frameSrc = $('.playVideo').attr('data-video');
    $('.videoPopup').fadeIn();
    $('.videoPopup iframe').attr('src', frameSrc);
};