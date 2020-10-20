import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { ButtonBase, GU, textStyle, useTheme } from '@1hive/1hive-ui'
import { ThumbsDownIcon, ThumbsUpIcon } from '../Icons'

import useAccountTokens from '../../hooks/useAccountTokens'
import { useAppState } from '../../providers/AppState'
import { useCanUserVote } from '../../hooks/useExtendedVoteData'
import { useWallet } from '../../providers/Wallet'

import BigNumber from '../../lib/bigNumber'
import { isEntitySupporting } from '../../lib/conviction'
import {
  PROPOSAL_STATUS_ACTIVE_STRING,
  QUICK_STAKE_PCT,
  STAKE_PCT_BASE,
  VOTE_NAY,
  VOTE_YEA,
} from '../../constants'
import { ProposalTypes } from '../../types'

function ProposalCardFooter({
  proposal,
  onStakeToProposal,
  onVoteOnDecision,
  onWithdrawFromProposal,
}) {
  if (proposal.type === ProposalTypes.Decision) {
    return (
      <DecisionFooter proposal={proposal} onVoteOnDecision={onVoteOnDecision} />
    )
  }

  return (
    <ProposalFooter
      proposal={proposal}
      onStakeToProposal={onStakeToProposal}
      onWithdrawFromProposal={onWithdrawFromProposal}
    />
  )
}

function ProposalFooter({
  proposal,
  onStakeToProposal,
  onWithdrawFromProposal,
}) {
  const theme = useTheme()
  const { account } = useWallet()
  const { accountBalance } = useAppState()
  const { inactiveTokens } = useAccountTokens(account, accountBalance)

  const supportersCount = useMemo(
    () => proposal.stakes.filter(({ amount }) => amount.gt(0)).length,
    [proposal]
  )

  const handleThumbsUp = useCallback(() => {
    // Staking the minimum between account's inactive tokens and 5% of account's balance
    const amount = BigNumber.min(
      inactiveTokens,
      accountBalance.times(QUICK_STAKE_PCT).div(STAKE_PCT_BASE)
    )

    onStakeToProposal(proposal.id, amount.toFixed(0))
  }, [accountBalance, inactiveTokens, onStakeToProposal, proposal.id])

  const handleThumbsDown = useCallback(() => {
    // Withdraw all the staked tokens on the proposal
    onWithdrawFromProposal(proposal.id)
  }, [proposal.id, onWithdrawFromProposal])

  const canSupport = inactiveTokens.gt(0)
  const isSupporting = isEntitySupporting(proposal, account)

  return (
    <Main color={theme.contentSecondary}>
      <div
        css={`
          display: flex;
          align-items: center;
        `}
      >
        {account && proposal.status === PROPOSAL_STATUS_ACTIVE_STRING && (
          <QuickActions
            canThumbsUp={canSupport}
            canThumbsDown={isSupporting}
            onThumbsUp={handleThumbsUp}
            onThumbsDown={handleThumbsDown}
          />
        )}
        <div>
          {supportersCount} Supporter{supportersCount === 1 ? '' : 's'}
        </div>
      </div>
      <div>Status: {proposal.status}</div>
    </Main>
  )
}

function DecisionFooter({ proposal, onVoteOnDecision }) {
  const theme = useTheme()
  const { account } = useWallet()

  const votesCount = proposal.casts.length

  return (
    <Main color={theme.contentSecondary}>
      <div
        css={`
          display: flex;
          align-items: center;
        `}
      >
        {account && proposal.data.open && (
          <VoteActions proposal={proposal} onVote={onVoteOnDecision} />
        )}
        <div>
          {votesCount} Vote{votesCount === 1 ? '' : 's'}
        </div>
      </div>
      <div>Status: {proposal.status}</div>
    </Main>
  )
}

function VoteActions({ proposal, onVote }) {
  const [ready, setReady] = useState(false)

  const handleThumbsUp = useCallback(() => {
    onVote(proposal.id, VOTE_YEA)
  }, [onVote, proposal.id])

  const handleThumbsDown = useCallback(() => {
    onVote(proposal.id, VOTE_NAY)
  }, [onVote, proposal.id])

  const { canUserVote, canUserVotePromise } = useCanUserVote(proposal)

  useEffect(() => {
    let cancelled = false

    const whenReady = async () => {
      await canUserVotePromise
      if (!cancelled) {
        setReady(true)
      }
    }
    setReady(false)
    whenReady()

    return () => {
      cancelled = true
    }
  }, [canUserVotePromise])

  if (!ready) {
    return null
  }

  return (
    <QuickActions
      canThumbsUp={canUserVote}
      canThumbsDown={canUserVote}
      onThumbsUp={handleThumbsUp}
      onThumbsDown={handleThumbsDown}
    />
  )
}

function QuickActions({
  canThumbsUp,
  canThumbsDown,
  onThumbsUp,
  onThumbsDown,
}) {
  return (
    <div
      css={`
        display: flex;
        align-items: center;
      `}
    >
      <ButtonBase
        onClick={canThumbsUp ? onThumbsUp : null}
        css={`
          display: flex;
          margin-right: ${1 * GU}px;
        `}
        disabled={!canThumbsUp}
      >
        <ThumbsUpIcon disabled={!canThumbsUp} />
      </ButtonBase>

      <ButtonBase
        onClick={canThumbsDown ? onThumbsDown : null}
        css={`
          display: flex;
          margin-right: ${1.5 * GU}px;
        `}
        disabled={!canThumbsDown}
      >
        <ThumbsDownIcon disabled={!canThumbsDown} />
      </ButtonBase>
    </div>
  )
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ color }) => color};
  ${textStyle('body3')};
`

export default ProposalCardFooter
