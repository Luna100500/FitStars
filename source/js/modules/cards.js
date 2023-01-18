const item = document.querySelectorAll('.coaches__info');
const catalogItem = document.querySelectorAll('.coaches__item');
const swiper = document.getElementsByClassName('swiper')[0];
const coachesPreviews = Array.from(
    swiper.getElementsByClassName('coaches__preview')
);


const cardNames = coachesPreviews
    .map((coachesPreview) => coachesPreview.querySelector('h3'))
    .flat();

const showPreview = () => {
  for (let i = 0; i < item.length; i++) {
    item[i].style.zIndex = '-1';
  }
  for (let i = 0; i < item.length; i++) {
    cardNames[i].style.display = 'block';
  }
};

showPreview();

for (let i = 0; i < catalogItem.length; i++) {
  setTimeout(1000);
  catalogItem[i].onmouseover = function () {
    cardNames[i].style.display = 'none';
    item[i].style.zIndex = '1';
  };
  catalogItem[i].onmouseout = function () {
    cardNames[i].style.display = 'block';
    item[i].style.zIndex = '-1';
  };
}
