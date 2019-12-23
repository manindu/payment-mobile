import { submitPayment } from './paymentActions';
import { SUBMIT_PAYMENT } from './types';

test('should return the submit payment action', () => {
  const action = submitPayment({
    name: 'John Doe',
    month: '10',
    year: '2019',
    cardNumber: '4111 1111 1111 1111',
    cvv: 453
  });

  expect(action).toEqual({
    type: SUBMIT_PAYMENT,
    payload: {
      name: 'John Doe',
      month: '10',
      year: '2019',
      cardNumber: '4111 1111 1111 1111',
      cvv: 453
    }
  });
});
