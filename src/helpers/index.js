import assets from '../assets';

export const AMEX_MASK = '9999-999999-99999';
export const OTHER_MASK = '9999-9999-9999-9999';

export const getCardInputMask = value => {
  if (/^3[47]/.test(value)) {
    return AMEX_MASK;
  }
  return OTHER_MASK;
};

export const getCardLogo = id => {
  switch (id) {
    case 'visa':
      return assets.visa;
    case 'mastercard':
      return assets.master;
    case 'american-express':
      return assets.amex;
    default:
      return null;
  }
};
