import { useLayoutEffect } from 'react'
import { Outlet, useLocation, useOutletContext } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { ReceiptContextProvider, UserDetailsContextProvider, UserSettingsContextProvider } from '../../context'
import { NavigationMenu } from './NavigationMenu'
import { Footer } from './Footer'
import './MainLayout.css'

const outletColumConfig = {
  computer: '12',
  tablet: '14',
  mobile: '16'
}

const useScrollEffect = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
}

export const MainLayout = () => {
  useScrollEffect()
  const { user } = useOutletContext()

  return (
    <UserSettingsContextProvider>
      <NavigationMenu />
      <div className="main-layout">
        <Grid centered>
          <Grid.Row>
            <Grid.Column {...outletColumConfig}>
              <UserDetailsContextProvider uid={user.uid}>
                <ReceiptContextProvider
                  uid={user.uid}
                  limit={250}
                >
                  <Outlet context={{ user }} />
                </ReceiptContextProvider>
              </UserDetailsContextProvider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Footer />
    </UserSettingsContextProvider>
  )
}