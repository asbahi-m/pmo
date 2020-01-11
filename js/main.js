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
    if ($('#picturesSlider .carousel').val() !== undefined) {
    // external js: flickity.pkgd.js
    // show
        var $carousel = $('#picturesSlider .carousel').removeClass('is-hidden');
        // trigger redraw for transition
        $carousel[0].offsetHeight;
        // init Flickity
        $carousel.flickity();
    }

    /* ضبط مقاس ارتفاع إطارات أيقونات السلايدر الرئيسي بالتناسب مع عرض الإطار */
    var responsiveImg = $("#primSlider .carousel-indicators li");
    responsiveImg.height($(responsiveImg).innerWidth()/(4/3));

    /* ضبط مقاس ارتفاع إطارات الفيديو بالتناسب مع عرض الإطار */
    var iframeV = $("#videoSlider .carousel-inner iframe");
    iframeV.height($(iframeV).innerWidth()/(16/9));

    /////////////////////////// تحديد عناصر تصنيفات البحث
    function showChecked(name, check){
        var selectAll = document.querySelectorAll(".cate-all input");
        selectAll.forEach( x => {
            x.onchange = function() {
                if ($(this).is("#checkAll") || $(check).length === $(name).length) {
                    $(".cate-all :checkbox").prop("checked", $(this).prop("checked"));
                    $("#checkAll").prop("indeterminate", false);
                }
                else if ($(check).length > 0 && $(check).length < $(name).length) {
                    $("#checkAll").prop("indeterminate", true);
                    $("#checkAll").prop("checked", false);
                }
                else {
                    $("#checkAll").prop("indeterminate", false);
                    $("#checkAll").prop("checked", false);
                }
                
                if ($(check).length <= 0) {
                    $("#searchAll span").text("يرجى اختيار قسم واحد على الأقل").css("color", "red");
                }
                else if ($(check).length !== $(name).length) {
                    $("#searchAll span").text("البحث في أقسام محددة").css("color", "");
                }
                else {
                    $("#searchAll span").text("البحث في جميع الأقسام").css("color", "");
                }
            }
        });
    }

    /* تحديد عناصر تصنيفات البحث */
    $("#searchPlace input:checkbox").click(function() {
        showChecked("input[name='postCate[]']", "input[name='postCate[]']:checked");
    });
    
    /////////////////////////// أيقونة مسح كلمات البحث
    $("#searchWords ~ .search-clear").click(function() {
        $("#searchWords").val("").focus();
    })
    $("#searchWords").on("focus keyup", function() {
        if ($(this).val() == "") {
            $("#searchWords ~ .search-clear").hide();
        }
        else {
            $("#searchWords ~ .search-clear").show();
        }
    })
    
});