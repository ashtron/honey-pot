'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-80fbe817.js');
require('./unsupportedIterableToArray-781911ff.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-a581a881.js');

function IconRefresh(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M8.99 10.216H5.96v-3.03a.582.582 0 00-1.164 0v3.612c0 .321.26.582.582.582H8.99a.582.582 0 000-1.164zm9.632 2.407H15.01a.582.582 0 000 1.165h3.03v3.03a.582.582 0 101.164 0v-3.613a.582.582 0 00-.582-.582z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M17.66 10.001a5.96 5.96 0 00-3.072-3.413 5.96 5.96 0 00-4.586-.241 6.037 6.037 0 00-2.235 1.408L4.98 10.373a.582.582 0 00.797.849L8.57 8.597a4.866 4.866 0 011.82-1.153 4.841 4.841 0 016.172 2.946.582.582 0 001.098-.39zm1.386 2.806a.582.582 0 00-.823-.026l-2.793 2.625a4.804 4.804 0 01-3.432 1.43h-.001a4.804 4.804 0 01-3.419-1.416 4.866 4.866 0 01-1.14-1.807.582.582 0 00-1.097.389 6.037 6.037 0 001.414 2.242A5.96 5.96 0 0011.997 18h.001a5.96 5.96 0 004.236-1.752l2.786-2.618a.582.582 0 00.026-.823z"
  }));
}

IconRefresh.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconRefresh;
//# sourceMappingURL=IconRefresh.js.map
