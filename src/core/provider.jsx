import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';

const InduxionProvider = ({ children, actions, reducers, middlewares }) => {
  const store = configureStore({ actions, reducers, middlewares });

  return (
    <Provider store={store}>{children}</Provider>
  )
};

export default InduxionProvider;