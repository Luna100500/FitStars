const removeTabindex = () => {
  const coachItems = Array.from(document.querySelectorAll('.coaches__item'));
  coachItems.forEach((i) => {
    i.setAttribute('tabindex', 0);
  });
  coachItems
      .filter((item, index) => {
        if (window.innerWidth < 768) {
          return index < 1;
        }
        if (window.innerWidth >= 768 && window.innerWidth < 1200) {
          return index < 2;
        }
        if (window.innerWidth >= 1200) {
          return index < 4;
        }
      })
      .forEach((i) => i.setAttribute('tabindex', -1));
};

window.addEventListener('resize', () => {
  removeTabindex();
});

window.innerWidth;
setTimeout(() => removeTabindex(), 2000);
