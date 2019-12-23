import React from 'react';
import {Provider} from 'react-redux';
import PaymentScreen from './src/screens/PaymentScreen';
import {store} from './src/state/store';

const App = () => {
  return (
    <Provider store={store}>
      <PaymentScreen />
    </Provider>
  );
};

export default App;
