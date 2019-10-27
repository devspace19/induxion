"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _configureStore = _interopRequireDefault(require("./redux/configureStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InduxionProvider = function InduxionProvider(_ref) {
  var children = _ref.children,
      actions = _ref.actions,
      reducers = _ref.reducers,
      middlewares = _ref.middlewares;
  var store = (0, _configureStore["default"])({
    actions: actions,
    reducers: reducers,
    middlewares: middlewares
  });
  return _react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, children);
};

var _default = InduxionProvider;
exports["default"] = _default;