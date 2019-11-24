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
    $("#backToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    /* سلايدر الصور في الرئيسية */
    // external js: flickity.pkgd.js
    // show
    var $carousel = $('#picturesSlider .carousel').removeClass('is-hidden');
    // trigger redraw for transition
    $carousel[0].offsetHeight;
    // init Flickity
    $carousel.flickity();

    /* ضبط مقاس ارتفاع إطارات أيقونات السلايدر الرئيسي بالتناسب مع عرض الإطار */
    var responsiveImg = $("#primSlider .carousel-indicators li");
    responsiveImg.height($(responsiveImg).innerWidth()/(4/3));

    /* ضبط مقاس ارتفاع إطارات الفيديو بالتناسب مع عرض الإطار */
    var iframeV = $("#videoSlider .carousel-inner iframe");
    iframeV.height($(iframeV).innerWidth()/(16/9));
    
});