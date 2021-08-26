import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Main, ToastHub } from '@1hive/1hive-ui'
import MainView from '@components/MainView'
import Routes from './routes/Routes'
import GlobalErrorHandler from './GlobalErrorHandler'
import { GardensProvider } from './providers/Gardens'
import { WalletProvider } from './providers/Wallet'
import { ProfileProvider } from './providers/Profile'

function App() {
  return (
    <HashRouter>
        <Main assetsUrl="/aragon-ui/" layout={false} scrollView={false}>
          <GlobalErrorHandler>
            <ToastHub
              threshold={1}
              timeout={1500}
              css={`
                & > div {
                  width: auto;
                  & > div {
                    rgba(33, 43, 54, 0.9);
                    border-radius: 16px;
                  }
                }
              `}
            >
              <WalletProvider>
                <ProfileProvider>
                  <GardensProvider>
                    <MainView>
                      <Routes />
                    </MainView>
                  </GardensProvider>
                </ProfileProvider>
              </WalletProvider>
            </ToastHub>
          </GlobalErrorHandler>
        </Main>
    </HashRouter>
  )
}

export default App
