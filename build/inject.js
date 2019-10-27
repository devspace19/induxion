"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HOCComponent = function HOCComponent(Component) {
  var Action = {}; // Map state to props

  var mapStateToProps = function mapStateToProps(state) {
    return state;
  };

  if (Component.getStates) {
    var states = Component.getStates;

    mapStateToProps = function mapStateToProps(mapState) {
      var props = {};
      Object.keys(states).map(function (state) {
        props[state] = (0, _get["default"])(mapState, "".concat(states[state]));
      });
      return props;
    };
  } // Map dispatch to props


  var mapDispatchToProps = undefined;

  if (Component.getActions) {
    var actions = Component.getActions;

    mapDispatchToProps = function mapDispatchToProps(dispatch) {
      var props = {};

      if (window !== undefined) {
        Action = window._actions;
      } else {
        Action = global._actions;
      }

      actions.forEach(function (action) {
        return props[action] = function () {
          var _Action;

          return dispatch((_Action = Action)[action].apply(_Action, arguments));
        };
      });
      return props;
    };
  }

  var MainComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(MainComponent, _React$Component);

    function MainComponent() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MainComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "render", function () {
        return _react["default"].createElement(Component, _this.props);
      });

      return _this;
    }

    return MainComponent;
  }(_react["default"].Component);

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainComponent);
};

var _default = HOCComponent;
exports["default"] = _default;