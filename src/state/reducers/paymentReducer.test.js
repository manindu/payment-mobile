import paymentReducer, { initialState } from './paymentReducer';
import { SUBMIT_PAYMENT } from '../actions/types';

test('should set default state', () => {
  const state = paymentReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    name: '',
    month: '',
    year: '',
    cardNumber: '',
    cvv: '',
    processing: false
  });
});

test('should set the card information', () => {
  const state = paymentReducer(initialState, {
    type: SUBMIT_PAYMENT,
    payload: {
      name: 'John Doe',
      month: '10',
      year: '2019',
      cardNumber: '4111 1111 1111 1111',
      cvv: 453
    }
  });

  expect(state).toEqual({
    name: 'John Doe',
    month: '10',
    year: '2019',
    cardNumber: '4111 1111 1111 1111',
    cvv: 453,
    processing: true
  });
});
