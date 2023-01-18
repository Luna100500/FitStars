const subscriptionPeriodButtons = document.getElementsByClassName(
    'subscription__period-button'
);

const subscriptionRateLists = document.getElementsByClassName(
    'subscription__rate-list'
);

const deactivateAllButtons = () => {
  Array.from(subscriptionPeriodButtons).forEach((button) =>
    button.classList.remove('subscription__period-button--active')
  );
};

const activateButton = (index) => {
  const buttonByIndex = Array.from(subscriptionPeriodButtons)
      .find((button, buttonIndex) => buttonIndex === index);
  if (buttonByIndex) {
    buttonByIndex.classList.add('subscription__period-button--active');
  }
};

const hideAllTabs = () => {
  Array.from(subscriptionRateLists).forEach((element) =>
    element.classList.add('subscription__rate-list--hidden')
  );
};

const showTab = (index) => {
  const tabByIndex = Array.from(subscriptionRateLists)
      .find((rateList, rateListIndex) => rateListIndex === index);
  if (tabByIndex) {
    tabByIndex.classList.remove('subscription__rate-list--hidden');
  }
};

const handleButtonClick = (index) => {
  deactivateAllButtons();
  activateButton(index);
  hideAllTabs();
  showTab(index);
};

Array.from(subscriptionPeriodButtons).forEach((button, index) => {
  button.addEventListener('click', () => {
    handleButtonClick(index);
  });
});

handleButtonClick(0);
