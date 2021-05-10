import React from 'react'
import { Box, Button, GU, useTheme } from '@1hive/1hive-ui'

import wrappTokenIcon from '../../assets/icon-wrapp.svg'
import unwrappTokenIcon from '../../assets/icon-unwrapp.svg'
import { useAppState } from '../../providers/AppState'

function WrapperModule({ onWrap, onUnwrap }) {
  const theme = useTheme()
  const {
    accountBalance,
    stakeToken,
    wrappableBalance,
    wrappableToken,
  } = useAppState()

  return (
    <Box padding={2 * GU}>
      <div
        css={`
          display: flex;
          justify-content: space-around;
        `}
      >
        <div
          css={`
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <img src={wrappTokenIcon} alt="" height="48px" />
          <span>{wrappableBalance.eq(-1) ? 0 : wrappableBalance}</span>
          <text>{wrappableToken.symbol}</text>
          <Button
            label="Wrapp"
            onClick={onWrap}
            mode="strong"
            disabled={wrappableBalance.eq(-1)}
          />
        </div>
        <div
          css={`
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-left: 1px solid ${theme.border};
          `}
        >
          <img src={unwrappTokenIcon} alt="" height="48px" />
          <span>{accountBalance.eq(-1) ? 0 : accountBalance}</span>
          <text>Wrapped {stakeToken.symbol}</text>
          <Button
            label="Unwrap"
            onClick={onUnwrap}
            disabled={accountBalance.eq(-1)}
          />
        </div>
      </div>
    </Box>
  )
}

export default WrapperModule
