$(document).ready(function () {
    $('.slider').slick({
        autoPlay: false,
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.yu').on('click', function () {
        $('.slider').slick('slickGoTo', 0);
    });
    $('.ayumu').on('click', function () {
        $('.slider').slick('slickGoTo', 1);
    });
    $('.kasumi').on('click', function () {
        $('.slider').slick('slickGoTo', 2);
    });
    $('.shizuku').on('click', function () {
        $('.slider').slick('slickGoTo', 3);
    });
    $('.karin').on('click', function () {
        $('.slider').slick('slickGoTo', 4);
    });
    $('.ai').on('click', function () {
        $('.slider').slick('slickGoTo', 5);
    });
    $('.kanata').on('click', function () {
        $('.slider').slick('slickGoTo', 6);
    });
    $('.setsuna').on('click', function () {
        $('.slider').slick('slickGoTo', 7);
    });
    $('.ema').on('click', function () {
        $('.slider').slick('slickGoTo', 8);
    });
    $('.rina').on('click', function () {
        $('.slider').slick('slickGoTo', 9);
    });
    $('.shioriko').on('click', function () {
        $('.slider').slick('slickGoTo', 10);
    });
    $('.mia').on('click', function () {
        $('.slider').slick('slickGoTo', 11);
    });
    $('.lanzhu').on('click', function () {
        $('.slider').slick('slickGoTo', 12);
    });
})