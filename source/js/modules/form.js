import iMask from 'imask';

const maskOptions = {
  mask: '00000000000',
};

iMask(document.querySelector('#phone-mask'), maskOptions);
