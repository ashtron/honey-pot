import './slicedToArray-cbf46938.js';
import './unsupportedIterableToArray-b9b63d70.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './toConsumableArray-22f6e627.js';
import _styled from 'styled-components';
import './getPrototypeOf-49f616ae.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import { noop } from './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "DotSwitch___StyledDiv",
  componentId: "dslupc-0"
})(["display:flex;flex-direction:column;justify-content:center;"]);

function DotSwitch(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_StyledDiv, null, /*#__PURE__*/React.createElement(Dot, {
    isActive: !checked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(Dot, {
    isActive: checked,
    onChange: onChange
  }));
}

var _StyledSpan = _styled("span").withConfig({
  displayName: "DotSwitch___StyledSpan",
  componentId: "dslupc-1"
})(["height:10px;width:10px;margin:5px;border:1px solid #c8c8c9;background-color:", ";border-radius:50%;display:inline-block;cursor:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function Dot(_ref2) {
  var isActive = _ref2.isActive,
      onChange = _ref2.onChange;
  return /*#__PURE__*/React.createElement(_StyledSpan, {
    onClick: !isActive ? function (e) {
      e.preventDefault();
      onChange();
    } : undefined,
    _css: isActive ? '#C8C8C9' : '#ffffff',
    _css2: !isActive && 'pointer'
  });
}

DotSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};
DotSwitch.defaultProps = {
  checked: false,
  onChange: noop
};
Dot.propTypes = {
  isActive: PropTypes.bool,
  onChange: PropTypes.func
};

export default DotSwitch;
//# sourceMappingURL=DotSwitch.js.map
