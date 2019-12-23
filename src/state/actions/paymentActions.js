import { SUBMIT_PAYMENT } from './types';

export const submitPayment = payload => {
  return { type: SUBMIT_PAYMENT, payload };
};
