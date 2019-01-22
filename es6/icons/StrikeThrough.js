var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { StyledIcon } from '../StyledIcon';

export var StrikeThrough = function StrikeThrough(props) {
  return React.createElement(
    StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StrikeThrough' }, props),
    React.createElement('rect', { x: '5.77', y: '12.17', width: '12.46', height: '1.09' }),
    React.createElement('path', { d: 'M16.7,13.65H12.89c.59.34,1,.6,1.18.74a3.39,3.39,0,0,1,1,1.07,2.38,2.38,0,0,1,.31,1.14,2.3,2.3,0,0,1-.82,1.76,3.18,3.18,0,0,1-2.22.74,4.7,4.7,0,0,1-2.23-.54A3.77,3.77,0,0,1,8.56,17.2a7.41,7.41,0,0,1-.79-2.46H7.36V20h.41a1.35,1.35,0,0,1,.24-.7.59.59,0,0,1,.44-.17,6.5,6.5,0,0,1,1.39.35,12.63,12.63,0,0,0,1.45.41,7.26,7.26,0,0,0,1.25.1A4.87,4.87,0,0,0,16,18.72a4,4,0,0,0,1.34-3A3.8,3.8,0,0,0,16.92,14C16.86,13.87,16.78,13.77,16.7,13.65Z' }),
    React.createElement('path', { d: 'M8.89,11.21c.21.17.49.36.81.57h4.87c-.48-.29-1.07-.62-1.76-1A12.49,12.49,0,0,1,9.48,8.54,1.93,1.93,0,0,1,9,7.26a2.18,2.18,0,0,1,.77-1.63,2.72,2.72,0,0,1,1.93-.71,4.14,4.14,0,0,1,2,.53,3.78,3.78,0,0,1,1.49,1.43,6.6,6.6,0,0,1,.73,2.42h.41V4h-.41a1.39,1.39,0,0,1-.3.7.67.67,0,0,1-.48.17,2.64,2.64,0,0,1-.89-.28A6.45,6.45,0,0,0,11.68,4,4.49,4.49,0,0,0,8.47,5.21,3.75,3.75,0,0,0,7.21,8a3.57,3.57,0,0,0,.43,1.73A4.72,4.72,0,0,0,8.89,11.21Z' })
  );
};