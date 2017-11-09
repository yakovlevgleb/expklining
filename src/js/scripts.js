$(document).ready(function() {

  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    draggable:false,
    mobileFirst: true,
    cssEase: 'linear',
    responsive: true,
    arrows: false,
    dots: true,
  });

$('.form-call__input--tel').mask('+7 (000) 000-00-00');

});
