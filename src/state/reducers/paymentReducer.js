import { SUBMIT_PAYMENT } from '../actions/types';

export const initialState = {
  name: '',
  month: '',
  year: '',
  cardNumber: '',
  cvv: '',
  processing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PAYMENT:
      return {
        processing: true,
        name: action.payload.name,
        month: action.payload.month,
        year: action.payload.year,
        cardNumber: action.payload.cardNumber,
        cvv: action.payload.cvv
      };
    default:
      return state;
  }
};
