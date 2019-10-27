"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configureStore;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxMiddleware = _interopRequireDefault(require("./reduxMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function configureStore(_ref) {
  var _ref$preloadedState = _ref.preloadedState,
      preloadedState = _ref$preloadedState === void 0 ? {} : _ref$preloadedState,
      _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? {} : _ref$actions,
      _ref$reducers = _ref.reducers,
      reducers = _ref$reducers === void 0 ? {} : _ref$reducers;
  var reducerCreators = (0, _redux.combineReducers)(reducers);
  var middleware = [(0, _reduxMiddleware["default"])(), _reduxThunk["default"]];
  var DEV = process.env.NODE_ENV !== 'production';
  var composeEnhancers = _redux.compose;

  if (window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && DEV) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actions: actions
    });
  }

  if (window !== undefined) {
    window._actions = actions;
  } else {
    global._actions = actions;
  }

  var store = (0, _redux.createStore)(reducerCreators, preloadedState, composeEnhancers(_redux.applyMiddleware.apply(void 0, middleware)));
  return store;
}