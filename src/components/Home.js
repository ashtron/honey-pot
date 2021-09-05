import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useToast } from '@1hive/1hive-ui'

import GardensList from './GardensList'
import LandingBanner from './LandingBanner'
import MultiModal from './MultiModal/MultiModal'
import Onboarding from './Onboarding'
import ConectWalletScreens from './ModalFlows/ConectWallet/ConectWalletScreens'
import { useWallet } from '@/providers/Wallet'
import { useNodeHeight } from '@hooks/useNodeHeight'

function Home() {
  const [height, ref] = useNodeHeight()
  const [onboardingVisible, setOnboardingVisible] = useState(false)
  const [connectModalVisible, setConnectModalVisible] = useState(false)
  const { account } = useWallet()
  const toast = useToast()

  const handleOnboardingOpen = useCallback(() => {
    if (!account) {
      setConnectModalVisible(true)
      return
    }
    setOnboardingVisible(true)
  }, [account])

  const handleOnboardingClose = useCallback(() => {
    setOnboardingVisible(false)
    toast('Saved!')
  }, [toast])

  const handleCloseModal = useCallback(accountConnected => {
    setConnectModalVisible(false)
    if (accountConnected) {
      setOnboardingVisible(true)
    }
  }, [])

  return (
    <div>
      <LandingBanner ref={ref} onCreateGarden={handleOnboardingOpen} />
      <DynamicDiv marginTop={height}>
        <GardensList />
      </DynamicDiv>
      <Onboarding onClose={handleOnboardingClose} visible={onboardingVisible} />
      <MultiModal visible={connectModalVisible} onClose={handleCloseModal}>
        <ConectWalletScreens onCloseModal={handleCloseModal} />
      </MultiModal>
    </div>
  )
}

const DynamicDiv = styled.div.attrs(props => ({
  style: { marginTop: props.marginTop + 'px' },
}))``

export default Home
