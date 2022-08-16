import './styles/style.scss';
import Swiper from 'swiper';
import '../node_modules/swiper/swiper.scss';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
