const imgArray = [
    './img/gallery/forest.jpg',
    './img/gallery/forest2.jpg',
    './img/gallery/forest3.jpg',
    './img/gallery/forest4.jpg',
    './img/gallery/autumn_forest.jpg',
    './img/gallery/autumn_forest2.jpg',
    './img/gallery/autumn_forest3.jpg',
    './img/gallery/winter_forest.jpg',
]

const swiperWrapper = document.querySelector(".swiper-wrapper");

for (let image in imgArray){
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    const imageSlide = document.createElement('img');
    imageSlide.setAttribute('src', imgArray[image]);
    slide.appendChild(imageSlide);
    swiperWrapper.appendChild(slide);
}


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
