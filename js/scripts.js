$(document).ready(function(){
    $('.courusel__items').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        infinite: true
    });

    const body = $('body');
    console.log(body);

    $('#card-1').on('click', function () {
        $('.overlay, #card-1_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-2').on('click', function () {
        $('.overlay, #card-2_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-3').on('click', function () {
        $('.overlay, #card-3_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-4').on('click', function () {
        $('.overlay, #card-4_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-5').on('click', function () {
        $('.overlay, #card-5_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-6').on('click', function () {
        $('.overlay, #card-6_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-7').on('click', function () {
        $('.overlay, #card-7_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-8').on('click', function () {
        $('.overlay, #card-8_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-9').on('click', function () {
        $('.overlay, #card-9_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-10').on('click', function () {
        $('.overlay, #card-10_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-11').on('click', function () {
        $('.overlay, #card-11_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-12').on('click', function () {
        $('.overlay, #card-12_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-13').on('click', function () {
        $('.overlay, #card-13_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-14').on('click', function () {
        $('.overlay, #card-14_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-15').on('click', function () {
        $('.overlay, #card-15_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-16').on('click', function () {
        $('.overlay, #card-16_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-17').on('click', function () {
        $('.overlay, #card-17_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-18').on('click', function () {
        $('.overlay, #card-18_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('#card-19').on('click', function () {
        $('.overlay, #card-19_modal').fadeIn();
        $('html').css('overflow', 'hidden');
    });

    $('.modal__close').on('click', function(){
        $('.overlay, .modal').fadeOut();
        $('html').css('overflow', 'scroll');
    });
  });