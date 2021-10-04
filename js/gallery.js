const swiper = new Swiper('.swiper', {
    autoplay: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 30,
        depth: 250,
    },
    effect: 'coverflow',
    loopedSlides: 4,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
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
