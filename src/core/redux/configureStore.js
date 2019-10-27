import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reduxMiddleware from './reduxMiddleware';

export default function configureStore({ preloadedState = {}, actions = {}, reducers = {} }) {
  const reducerCreators = combineReducers(reducers);
  const middleware = [reduxMiddleware(), thunk];
  let composeEnhancers = compose;

  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actions
    });
  }

  const store = createStore(
    reducerCreators,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
