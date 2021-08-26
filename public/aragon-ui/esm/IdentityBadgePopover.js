import './slicedToArray-cbf46938.js';
import './unsupportedIterableToArray-b9b63d70.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-22f6e627.js';
import _styled from 'styled-components';
import './getPrototypeOf-49f616ae.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import { capitalize } from './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import { blockExplorerUrl } from './web3.js';
import { GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import './Theme.js';
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './index-422d37c0.js';
import './isObject-4d8f8486.js';
import './Viewport-61a008be.js';
import './Layout.js';
import './FocusVisible.js';
import './ButtonBase.js';
import './IconPropTypes-701b55a4.js';
import './IconAddUser.js';
import './IconAlert.js';
import './IconAlignCenter.js';
import './IconAlignJustify.js';
import './IconAlignLeft.js';
import './IconAlignRight.js';
import './IconAragon.js';
import './IconArrowDown.js';
import './IconArrowLeft.js';
import './IconArrowRight.js';
import './IconArrowUp.js';
import './IconAtSign.js';
import './IconBlock.js';
import './IconBookmark.js';
import './IconCalendar.js';
import './IconCanvas.js';
import './IconCaution.js';
import './IconCenter.js';
import './IconChart.js';
import './IconChat.js';
import './IconCheck.js';
import './IconChip.js';
import './IconCircleCheck.js';
import './IconCircleMinus.js';
import './IconCirclePlus.js';
import './IconClock.js';
import './IconCloudDownload.js';
import './IconCloudUpload.js';
import './IconCoin.js';
import './IconConfiguration.js';
import './IconConnect.js';
import './IconConnection.js';
import './IconConsole.js';
import './IconCopy.js';
import './IconCross.js';
import './IconDashedSquare.js';
import './IconDown.js';
import './IconDownload.js';
import './IconEdit.js';
import './IconEllipsis.js';
import './IconEnter.js';
import './IconEthereum.js';
import './IconExternal.js';
import './IconFile.js';
import './IconFilter.js';
import './IconFlag.js';
import './IconFolder.js';
import './IconGraph2.js';
import './IconGraph.js';
import './IconGrid.js';
import './IconGroup.js';
import './IconHash.js';
import './IconHeart.js';
import './IconHide.js';
import './IconHome.js';
import './IconImage.js';
import './IconInfo.js';
import './IconLabel.js';
import './IconLayers.js';
import './IconLeft.js';
import './IconLink.js';
import './IconLocation.js';
import './IconLock.js';
import './IconMail.js';
import './IconMaximize.js';
import './IconMenu.js';
import './IconMinimize.js';
import './IconMinus.js';
import './IconMove.js';
import './IconNoPicture.js';
import './IconPicture.js';
import './IconPlus.js';
import './IconPower.js';
import './IconPrint.js';
import './IconProhibited.js';
import './IconQuestion.js';
import './IconRefresh.js';
import './IconRemoveUser.js';
import './IconRight.js';
import './IconRotateLeft.js';
import './IconRotateRight.js';
import './IconSearch.js';
import './IconSettings.js';
import './IconShare.js';
import './IconSquareMinus.js';
import './IconSquarePlus.js';
import './IconSquare.js';
import './IconStarFilled.js';
import './IconStar.js';
import './IconSwap.js';
import './IconTarget.js';
import './IconToken.js';
import './IconTrash.js';
import './IconUnlock.js';
import './IconUp.js';
import './IconUpload.js';
import './IconUser.js';
import './IconView.js';
import './IconVote.js';
import './IconWallet.js';
import './IconWarning.js';
import './IconWorld.js';
import './IconWrite.js';
import './IconZoomIn.js';
import './IconZoomOut.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import './web-a351a0a1.js';
import './Button.js';
import './ButtonIcon.js';
import './getDisplayName-d5fc7707.js';
import './index-a5008d68.js';
import Link from './Link.js';
import './TextInput.js';
import './ToastHub.js';
import './index-4678b404.js';
import './RootPortal.js';
import './TextCopy.js';
import './taggedTemplateLiteral-37fd5203.js';
import './_react_commonjs-external-3b63cae6.js';
import './EthIdenticon.js';
import AddressField from './AddressField.js';
import BadgePopoverActionType from './BadgePopoverActionType.js';
import Tag from './Tag.js';
import { P as PropTypes } from './proptypes-c8a77d05.js';
import './Popover.js';
import './observe.js';
import './index-7cf323f6.js';
import './providers.js';
import BadgePopoverBase from './BadgePopoverBase.js';

var _StyledTag = _styled(Tag).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "ewaz9y-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var IdentityBadgePopover = React.memo(function IdentityBadgePopover(_ref) {
  var address = _ref.address,
      connectedAccount = _ref.connectedAccount,
      explorerProvider = _ref.explorerProvider,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = blockExplorerUrl('address', address, {
    networkType: networkType,
    provider: explorerProvider
  });
  return /*#__PURE__*/React.createElement(BadgePopoverBase, {
    addressField: /*#__PURE__*/React.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React.createElement(Link, {
      href: etherscanUrl
    }, "See on ", capitalize(explorerProvider !== null && explorerProvider !== void 0 ? explorerProvider : 'blockscout')),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React.createElement(_StyledTag, {
      title: "This is your Ethereum address",
      _css: 1 * GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: PropTypes.string,
  connectedAccount: PropTypes.bool,
  explorerProvider: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node,
  visible: PropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

export default IdentityBadgePopover;
//# sourceMappingURL=IdentityBadgePopover.js.map
