(function($) {
    'use strict';
    $(document).ready(function(){
        var wow = new WOW();
        wow.init();
        setTimeout(() => {
            $('.loader').fadeOut(2000);
            $('html, body').animate({
                scrollTop: $(".masthead").offset().top
            }, 2000);
        }, 3000);
    });

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 63)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    $('body').scrollspy({
        target: '#mainNav',
        offset: 64
    });
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
    $('.portfolio-modal').on('show.bs.modal', function(e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
        $(".navbar").removeClass("d-none");
    })

})(jQuery);
$(function() {
    $("#gallery-slider").owlCarousel({
        items: 3,
        smartSpeed: 700,
        autoplay: true,
        loop: true,
        pagination: true,
        slideSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            } 
        }
    });
});
(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("ss-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("ss-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});