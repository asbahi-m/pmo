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

    /* خصائص وحركات السلايدرات */
    $('#subSlider1').carousel({
        interval: 20000,
    })
    $('#subSlider2').carousel({
        interval: 7000,
    })
    $('#subSlider3').carousel({
        interval: 9000
    })
    $('#subSlider4').carousel({
        interval: 11000
    })
    $('#videoSlider').carousel({
        interval: 20000
    })

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

    /* تكبير الصورة البارزة عد النقر على الأيقونة */
    $(".figure-img .icon i").click(function() {
        $(this).parentsUntil("figure").last().addClass("full");
        $(this).parentsUntil("figure").find("img").hide().fadeIn(500);

        $("body").css("overflow","hidden");
        
        $("body").mousedown(function(x) {
            if (x.target.tagName != "IMG") {
                console.log(x.target.tagname);
                $(".figure-img").removeClass("full");
                $("body").css("overflow","");
            }
        })
    })

    /* تكبير أي صورة داخل المشاركة */
    $(".post article img:not(.img-fluid)").click(function() {
        var heigheImg = $(this).height(),
            widthImg = $(this).width(),
            marginLeftImg = $(this).css("margin-left"),
            marginRightImg = $(this).css("margin-right");
            // console.log(marginImg);
        $(this).css({
            "height": "unset",
            "width": "unset",
            "max-height": "90%",
            "max-width": "90%",
            "margin": "auto",
            "position": "fixed",
            "top": 0,
            "bottom": 0,
            "right": 0,
            "left": 0,
            "margin": "auto",
            "z-index": 1111,
            "cursor": "auto"
        });
        
        $("body").css("overflow","hidden");
        
        $("body").mousedown(function(x) {
            if (x.target.tagName != "IMG") {
                console.log(x.target.tagname);
                $(".post article img:not(.img-fluid)").css({
                    "height": heigheImg,
                    "width": widthImg,
                    "position": "relative",
                    "max-width": "75%",
                    "margin-left": marginLeftImg,
                    "margin-right": marginRightImg,
                    "z-index": "auto",
                    "cursor": "pointer"
                })
                $("body").css("overflow","");
            }
        })
    })

    /* ضبط مقاس ارتفاع إطارات أيقونات السلايدر الرئيسي بالتناسب مع عرض الإطار */
    // var responsiveImg = $("#primSlider .carousel-indicators li");
    // responsiveImg.height($(responsiveImg).innerWidth()/(4/3));

    /* ضبط مقاس ارتفاع إطارات الفيديو بالتناسب مع عرض الإطار */
    // var iframeV = $("#videoSlider .carousel-inner iframe");
    // iframeV.height($(iframeV).innerWidth()/(16/9));

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
    $(".page #searchWords ~ .search-clear").click(function() {
        $(this).parent().find("#searchWords").val("").focus();
    })
    $(".page #searchWords").on("focus keyup", function() {
        if ($(this).val() == "") {
            $(this).parent().find(".search-clear").hide();
        }
        else {
            $(this).parent().find(".search-clear").show();
        }
    })

    /////////////////////////// بوكس عارض الصور lightbox --> modal
    $(".cardImg .icon").click(function() {
        $(this).attr({
            "data-toggle": "modal",
            "data-target":"#imgModal"
        });
        var img = $(this).parentsUntil(".card").parent().find(".cardImg"),
        img_url = img.css("background-image").replace(/^url\(["']?/, '').replace(/["']?\)$/, ''),
        title = $(this).parentsUntil('.card').parent().find('h5').text();
        var modalHtml = 
        '<div class="modal fade" id="imgModal" tabindex="-1" role="dialog" aria-labelledby="imgModalTitle" aria-hidden="true">\
            <div class="modal-dialog modal-lg" role="document">\
                <div class="modal-content">\
                    <div class="modal-header">\
                        <h5 class="modal-title" id="imgModalTitle">'+title+'</h5>\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                            <span aria-hidden="true">&times;</span>\
                        </button>\
                    </div>\
                    <div class="modal-body d-flex">\
                        <img>\
                    </div>\
                </div>\
            </div>\
        </div>';
        $("main").before(modalHtml);

        $("#imgModal").on("show.bs.modal", function(e) {
            $(this).find("img").attr({
                "src": img_url,
                "alt": title
            });
        })

        $("#imgModal").on("hidden.bs.modal", function(e) {
            $(this).remove();
        })
    })

    /////////////////////////// تضمين كود اليوتيوب لسلايدر الفيديو + إيقاف/تشغيل الفيديو عند التحريك
    $("#videoSlider .poster").each(function() {
        $(this).click(function() {
            if ($(this).parent().hasClass("active")){
                $(this).hide().parent().append(
                    '<iframe src="'+$(this).data("src")+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                );
                $('#videoSlider').carousel('pause');
            }
        });
    })

    $('#videoSlider').on('slide.bs.carousel', function () {
        if (!$(this).hasClass("active")) {
            $("#videoSlider .carousel-item iframe").remove();
            $("#videoSlider .carousel-item .poster").show();
        }
        $('#videoSlider').carousel('cycle');
    })
});