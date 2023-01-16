import "../../js/vendor/swiper.js";

const prevBtn = document.querySelector(".coaches__swiper-button-prev");
const nextBtn = document.querySelector(".coaches__swiper-button-next");
const coachesList = document.querySelector(".coaches__list");
const coachesItem = document.getElementsByClassName("coaches__item");

const initCoachesSwiper = () => {
  prevBtn.style.display = "block";
  nextBtn.style.display = "block";
  coachesList.style.gap = "0";
  coachesList.classList.add("swiper-wrapper");
  for (let i = 0; i < coachesItem.length; i++) {
    coachesItem[i].classList.add("swiper-slide");
  }
};

initCoachesSwiper();

const currentSwiper = new Swiper(".coaches .swiper", {
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

prevBtn.addEventListener("click", () => {
  currentSwiper.slidePrev();
});

nextBtn.addEventListener("click", () => {
  currentSwiper.slideNext();
});

prevBtn.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    currentSwiper.slidePrev();
  }
});

nextBtn.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    currentSwiper.slideNext();
  }
});
