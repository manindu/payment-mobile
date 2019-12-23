import { combineReducers } from 'redux';
import paymentReducer from './reducers/paymentReducer';

export default combineReducers({
  payment: paymentReducer
});
