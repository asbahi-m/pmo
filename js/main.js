$(document).ready(function () {
    /* Scroll to top when arrow up clicked BEGIN */
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    $(document).ready(function() {
        $("#backToTop").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

    });
    // external js: flickity.pkgd.js
    // show
    var $carousel = $('#picturesSlider .carousel').removeClass('is-hidden');
    // trigger redraw for transition
    $carousel[0].offsetHeight;
    // init Flickity
    $carousel.flickity();
});