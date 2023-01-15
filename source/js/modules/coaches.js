import "../../js/vendor/swiper.js";

const prevBtn = document.querySelector(".trainers__swiper-button-prev");
const nextBtn = document.querySelector(".trainers__swiper-button-next");

const currentSwiper = new Swiper(".swiper", {
  spaceBetween: 0,
  slidesPerView: 1,
  rewind: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

prevBtn.addEventListener("click", () => {
  currentSwiper.slidePrev();
});

nextBtn.addEventListener("click", () => {
  currentSwiper.slideNext();
});

/* const trainersSwiperPrevSlideButton = document.querySelector(
  ".trainers__swiper-button-prev"
);
const trainersSwiperNextSlideButton = document.querySelector(
  ".trainers__swiper-button-next"
);

const initTrainersSwiper = () => {
  trainersSwiperPrevSlideButton.style.display = "block";
  trainersSwiperNextSlideButton.style.display = "block";

  let trainersSwiper = new Swiper(".tags-list", {
    spaceBetween: 40,
    slidesPerView: 1,
    rewind: true,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  // Навешиваем переключение слайдов по нажатию мышкой на кнопки
  trainersSwiperPrevSlideButton.addEventListener("click", () => {
    trainersSwiper.slidePrev();
  });

  trainersSwiperNextSlideButton.addEventListener("click", () => {
    trainersSwiper.slideNext();
  });

  // Навешиваем переключение слайдов по нажатию Enter на кнопке
  trainersSwiperPrevSlideButton.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 13) {
      trainersSwiper.slidePrev();
    }
  });

  trainersSwiperNextSlideButton.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 13) {
      trainersSwiper.slideNext();
    }
  });
}; */

// export const initSwipers = () => {
//   initReviewsSwiper();
//   initTrainersSwiper();
// };

/* initTrainersSwiper(); */
