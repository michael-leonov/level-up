import './styles/style.scss';
import Swiper from 'swiper/bundle';
import 'swiper/scss';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    speed: 700,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.4,
            spaceBetween: 30,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

let timeScreen = document.querySelector('.timer');
let time = 1800;
let tCount;

function countDown() {
    let minutes =
        Math.floor(time / 60) < 10
            ? '0' + Math.floor(time / 60)
            : Math.floor(time / 60);
    let seconds = time % 60 < 10 ? '0' + (time % 60) : time % 60;
    timeScreen.innerHTML = `${minutes}:${seconds}`;
    if (time <= 0) {
        clearInterval(tCount);
    }
    time--;
}

(function startGame() {
    tCount = setInterval(countDown, 1000);
})();
