let slideIndex = 3;
showSlide(slideIndex);

const left_swipe = document.getElementById('left');
const right_swipe = document.getElementById('right');

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.querySelectorAll('.slider-container__slide');
    const dots = document.querySelectorAll('.dots__dot');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#f5a08c"
    }

    slides[slideIndex - 1].style.display = 'inline-block';
    slides[slideIndex - 1].style.opacity = '1';
    dots[slideIndex - 1].style.backgroundColor = "#a57269"

}

right_swipe.addEventListener("click", () => {
    showSlide(slideIndex += 1);
});

left_swipe.addEventListener("click", () => {
    showSlide(slideIndex -= 1);
});

dot1.addEventListener('click', () => {
    currentSlide(1)
});

dot2.addEventListener('click', () => {
    currentSlide(2)
});

dot3.addEventListener('click', () => {
    currentSlide(3)
});