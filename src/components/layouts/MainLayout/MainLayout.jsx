import { useLayoutEffect } from 'react'
import { Outlet, useLocation, useOutletContext } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { ReceiptContextProvider, UserDetailsContextProvider, UserSettingsContextProvider } from '../../../context'
import { NavigationMenu } from '../../NavigationMenu'
import './MainLayout.css'

export const MainLayout = () => {
  const { user } = useOutletContext()

  const location = useLocation()
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <UserSettingsContextProvider>
      <NavigationMenu />
      <div className="main-layout">
        <Grid centered>
          <Grid.Row>
            <Grid.Column
              computer={'12'}
              tablet={'14'}
              mobile={'16'}
            >
              <UserDetailsContextProvider uid={user.uid}>
                <ReceiptContextProvider uid={user.uid}>
                  <Outlet context={{ user }} />
                </ReceiptContextProvider>
              </UserDetailsContextProvider>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </UserSettingsContextProvider>
  )
}