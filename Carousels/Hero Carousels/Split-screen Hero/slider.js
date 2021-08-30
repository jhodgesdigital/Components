$('.o-slider__left').slick({
    dots: true,
    arrows: false,
    swipe: false,
    vertical: true,
    fade: false,
    infinate: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    pauseOnHover: false,
    asNavFor: '.o-slider__right'
});

$('.o-slider__right').slick({
    dots: false,
    arrows: true,
    swipe: false,
    vertical: true,
    fade: false,
    infinate: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    pauseOnHover: false,
    asNavFor: '.o-slider__left',
    verticalReverse: 'true',
    prevArrow: "<img alt='Previous' class='slide-arrow slide-arrow-left' src='/img/prev.svg'>",
    nextArrow: "<img alt='Next' class='slide-arrow slide-arrow-right' src='/img/next.svg'>"
});