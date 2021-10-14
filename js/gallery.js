const imgArrayForest = [
    './img/gallery/forest.jpg',
    './img/gallery/forest2.jpg',
    './img/gallery/forest3.jpg',
    './img/gallery/forest4.jpg',
];

const imgArrayAutumnForest = [
    './img/gallery/autumn_forest.jpg',
    './img/gallery/autumn_forest2.jpg',
    './img/gallery/autumn_forest3.jpg',
];

const imgArrayWinterForest = [
    './img/gallery/winter_forest.jpg',
    './img/gallery/winter_forest2.jpg',
    './img/gallery/winter_forest3.jpg',
    './img/gallery/winter_forest4.jpg',
];

const imgArrayAnimals = [
    './img/gallery/bird.jpg',
    './img/gallery/bird2.jpg',
    './img/gallery/bird3.jpg',
    './img/gallery/squirrel.jpg',
    './img/gallery/squirrel2.jpg',
    './img/gallery/squirrel3.jpg',
    './img/gallery/fox.jpg',
    './img/gallery/deer.jpg',
    './img/gallery/deer2.jpg',
];

const imgArrayHeaders = [
    './img/gallery/forest.png',
    './img/gallery/autumn_forest.png',
    './img/gallery/winter_forest.png',
    './img/gallery/animals.png',
];

const swiperWrapper = document.querySelector(".swiper-wrapper");
const galleryDiv = document.querySelector(".folders");

createFolders();

function createSwiper(folder, wrapper, id, imgArray) {
    if (!(folder.classList.contains('exist'))) {
        const swiper = new Swiper(wrapper, {
            autoplay: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 30,
                depth: 250,
                slideShadows: false,
                stretch: 100,
            },
            effect: 'coverflow',
            loopedSlides: 4,
            pagination: {
                el: `.swiper-pagination-${id}`,
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: `.swiper-button-next-${id}`,
                prevEl: `.swiper-button-prev-${id}`,
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

        createSlides(imgArray, id);

        swiper.on('click', (slide) => {
            console.log(slide.clickedSlide.firstChild);
            slide.clickedSlide.firstChild.requestFullscreen();
        });
    }

    toggleSwiper(folder, wrapper, id);



}

function createFolders() {
    const arrays = [imgArrayForest, imgArrayAutumnForest, imgArrayWinterForest, imgArrayAnimals];
    const classes = ['forest', 'autumn_forest', 'winter_forest', 'animals'];
    const swipers = ['.swiper_forest', '.swiper_autumn_forest', '.swiper_winter_forest', '.swiper_animals'];
    const id = ['f', 'af', 'wf', 'a'];
    for (let image in imgArrayHeaders) {
        const folder = document.createElement('div');
        const folderImg = document.createElement('img');
        folder.classList.add('folder');
        folder.classList.add(classes[image]);
        folder.onclick = () => createSwiper(document.querySelector(`.${classes[image]}`), swipers[image], id[image], arrays[image]);
        folderImg.setAttribute('src', imgArrayHeaders[image]);
        folder.appendChild(folderImg);
        galleryDiv.appendChild(folder);
    }

}

function toggleSwiper(folder, wrapper, id) {
    document.querySelector(wrapper).style.display = "block";
    document.querySelector(`.close__swiper-${id}`).onclick = () => {
        document.querySelector(wrapper).style.display = "none";
        folder.classList.add('exist');
    };
}

function createSlides(imgArray, id){
    for (let image in imgArray) {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.setAttribute('id', image);
        const imageSlide = document.createElement('img');
        imageSlide.setAttribute('src', imgArray[image]);
        slide.appendChild(imageSlide);
        document.querySelector(`.swiper-wrapper-${id}`).appendChild(slide);
    }
}

