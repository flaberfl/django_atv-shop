$(function () {

    // $("#demoTab").easyResponsiveTabs({
    //     type: 'default', //Типы: default, vertical, accordion
    //     width: 'auto', //auto или любое значение ширины
    //     fit: true, // 100% пространства занимает в контейнере
    //     activate: function () {} // Функция обратного вызова, используется, когда происходит переключение вкладок
    // });

    $('.header-slider').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        lazyLoad: 'progressive',
        // variableWidth: true,
        // adaptiveHeight: true,
        // variableWidth: true,
        adaptiveHeight: false,
        infinite: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // $('.info__content-description--text').readmore({
    //     maxHeight: 240,
    //     moreLink: '<a class="read-more" href="#">Читать полностью</a>',
    //     lessLink: '<a class="read-more" href="#">Свернуть текст</a>'
    // });


});

// jQuery(document).ready(function () {
//     jQuery(".photo-list").unitegallery({
//         gallery_theme: "tiles",
//         tiles_type: "justified"
//     });
// });