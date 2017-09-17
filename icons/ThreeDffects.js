'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThreeDffects = function ThreeDffects(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'ThreeDffects' }, props),
    _react2.default.createElement('polygon', { fill: '#231F20', fillRule: 'evenodd', points: '13.009 1 6.844 2.988 20.203 7.315 20.203 15.838 11.301 18.715 3.787 16.287 3.787 7.934 11.051 10.282 17.216 8.294 3.837 3.958 0 5.206 0 19.045 11.301 22.702 24 18.595 24 4.547' })
  );
};

exports.default = ThreeDffects;