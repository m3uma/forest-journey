const swiper = new Swiper('.swiper', {
    autoplay: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 50,
        depth: 500,
    },
    effect: 'coverflow',
    loopedSlides: 4,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        invert: true,
    },
    slidesPerView: 'auto',
    loop: true,
    keyboard: {
        enabled: true,
      },
});



