import assets from '../assets';
import {getCardInputMask, getCardLogo, AMEX_MASK, OTHER_MASK} from './index';

test('should return amex input mask', () => {
  const mask = getCardInputMask('3400 0000 0000 009');

  expect(mask).toEqual(AMEX_MASK);
});

test('should return other input mask', () => {
  const mask = getCardInputMask('4111 1111 1111 1111');

  expect(mask).toEqual(OTHER_MASK);
});

test('should return master card logo', () => {
  const logo = getCardLogo('mastercard');

  expect(logo).toEqual(assets.master);
});

test('should return visa card logo', () => {
  const logo = getCardLogo('visa');

  expect(logo).toEqual(assets.visa);
});

test('should return american express card logo', () => {
  const logo = getCardLogo('american-express');

  expect(logo).toEqual(assets.amex);
});
