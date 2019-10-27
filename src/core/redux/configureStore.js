import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reduxMiddleware from './reduxMiddleware';

export default function configureStore({ preloadedState = {}, actions = {}, reducers = {}, middlewares = [ reduxMiddleware(), thunk ] }) {
  const reducerCreators = combineReducers(reducers);
  const DEV = process.env.NODE_ENV !== 'production';
  let composeEnhancers = compose;


  if (window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && DEV) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actions
    });
  }

  if (window !== undefined) {
    window._actions = actions;
  } else {
    global._actions = actions;
  }

  const store = createStore(
    reducerCreators,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}
