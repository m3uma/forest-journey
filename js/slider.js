class Slider {
    constructor(sentences) {
        this.sentences = sentences;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.divDots = null;
        this.sentence = null;
        this.currentSlide = 0;
        this.slideArrayLength = 0;
        this.slideCaption = null;
        this.allDots = null;

        this.UiSelectors = {
            slide: '[data-slide]',
            buttonPrev: '[data-button-prev]',
            buttonNext: '[data-button-next]',
            divDots: '[data-div-dots]',
        }
    }

    initSlider() {
        this.slide = document.querySelector(this.UiSelectors.slide);
        this.prevBtn = document.querySelector(this.UiSelectors.buttonPrev);
        this.nextBtn = document.querySelector(this.UiSelectors.buttonNext);
        this.divDots = document.querySelector(this.UiSelectors.divDots);

        this.sentence = document.createElement('div');
        this.sentence.classList.add('slide__sentence');

        this.setSlideAttributes(0);

        this.slideArrayLength = this.sentences && this.sentences.length;

        this.slide.appendChild(this.sentence);

        this.slideCaption = document.createElement('figcaption');
        this.addCaption();
        this.slideCaption.classList.add('slide__caption');
        //this.slide.appendChild(this.slideCaption);

        //this.disableButtons();
        this.addListeners();
        this.initDots();   

        window.setInterval(() => {
            this.nextSlide();
        }, 5000);

    }

    initDots() {
        for (let i = 0; i < this.slideArrayLength; ++i) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            this.divDots.appendChild(dot);
            dot.addEventListener("click", () => this.dotClick(i));
        }

        this.allDots = this.divDots.querySelectorAll(".dot");
        this.allDots[0].classList.add("active-dot");
    }

    dotClick(index) {
        if (index === this.currentSlide)
            return false;
        else
            this.changeSlide(index);
        this.activeDot(index);
    }

    activeDot(index) {
        if (index !== this.currentSlide){
            for (let i = 0; i < this.slideArrayLength; ++i) {
                this.allDots[i].classList.remove("active-dot");
            }
        } else
            this.allDots[this.currentSlide].classList.add("active-dot");
    }

    addListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());

        this.nextBtn.addEventListener('click', () => this.nextSlide());

        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 37) {
                this.prevSlide();
            } else if (e.keyCode === 39) {
                this.nextSlide();
            }
        })
    }

    disableButtons() {
        this.currentSlide === 0
            ? this.prevBtn.setAttribute('disabled', true)
            : this.prevBtn.removeAttribute('disabled');

        this.currentSlide === this.slideArrayLength - 1
            ? this.nextBtn.setAttribute('disabled', true)
            : this.nextBtn.removeAttribute('disabled');
    }

    prevSlide() {
        if (this.currentSlide < 1)
            this.changeSlide(this.slideArrayLength - 1);
        else
            this.changeSlide(this.currentSlide - 1);
        this.activeDot(this.currentSlide);
    }

    nextSlide() {
        if (this.currentSlide >= this.slideArrayLength - 1)
            this.changeSlide(0);
        else
            this.changeSlide(this.currentSlide + 1);
        this.activeDot(this.currentSlide);
    }

    changeSlide(index) {
        // if(index === -1 || index === this.slideArrayLength) return;
        this.activeDot(index);
        this.currentSlide = index;

        this.addCaption();

        this.setSlideAttributes(index);
        
        //this.disableButtons();
    }

    addCaption() {
        this.slideCaption.innerText = `${this.currentSlide + 1}/${this.slideArrayLength}`;
    }

    setSlideAttributes(index) {
        this.sentence.setAttribute('innerText', Array.isArray(this.sentences) && this.sentences.length && this.sentences[index]);
        this.sentence.innerText = this.sentences[index];
        this.sentence.setAttribute('alt', `Slide ${index + 1}`);
    }
}
