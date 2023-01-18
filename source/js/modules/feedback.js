import Swiper from '../../js/vendor/swiper.js';

const prevFeedbackBtn = document.querySelector('.feedback__swiper-button-prev');
const nextFeedbackBtn = document.querySelector('.feedback__swiper-button-next');
const feedbackList = document.querySelector('.feedback__list');
const feedbackItem = document.getElementsByClassName('feedback__item');

const initFeedbackSwiper = () => {
  prevFeedbackBtn.style.display = 'block';
  nextFeedbackBtn.style.display = 'block';
  feedbackList.style.gap = '0';
  feedbackList.classList.add('swiper-wrapper');
  for (let i = 0; i < feedbackItem.length; i++) {
    feedbackItem[i].classList.add('swiper-slide');
  }
};

initFeedbackSwiper();

const feedbackSwiper = new Swiper('.feedback .swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  rewind: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

prevFeedbackBtn.addEventListener('click', () => {
  feedbackSwiper.slidePrev();
});

nextFeedbackBtn.addEventListener('click', () => {
  feedbackSwiper.slideNext();
});

prevFeedbackBtn.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13) {
    feedbackSwiper.slidePrev();
  }
});

nextFeedbackBtn.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13) {
    feedbackSwiper.slideNext();
  }
});
