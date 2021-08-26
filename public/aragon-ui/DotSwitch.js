'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-80fbe817.js');
require('./unsupportedIterableToArray-781911ff.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./toConsumableArray-b9d88e95.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-236fce8e.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
var miscellaneous = require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "DotSwitch___StyledDiv",
  componentId: "dslupc-0"
})(["display:flex;flex-direction:column;justify-content:center;"]);

function DotSwitch(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange;
  return /*#__PURE__*/React__default.createElement(_StyledDiv, null, /*#__PURE__*/React__default.createElement(Dot, {
    isActive: !checked,
    onChange: onChange
  }), /*#__PURE__*/React__default.createElement(Dot, {
    isActive: checked,
    onChange: onChange
  }));
}

var _StyledSpan = _styled__default("span").withConfig({
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
  return /*#__PURE__*/React__default.createElement(_StyledSpan, {
    onClick: !isActive ? function (e) {
      e.preventDefault();
      onChange();
    } : undefined,
    _css: isActive ? '#C8C8C9' : '#ffffff',
    _css2: !isActive && 'pointer'
  });
}

DotSwitch.propTypes = {
  checked: index.PropTypes.bool,
  onChange: index.PropTypes.func
};
DotSwitch.defaultProps = {
  checked: false,
  onChange: miscellaneous.noop
};
Dot.propTypes = {
  isActive: index.PropTypes.bool,
  onChange: index.PropTypes.func
};

exports.default = DotSwitch;
//# sourceMappingURL=DotSwitch.js.map
