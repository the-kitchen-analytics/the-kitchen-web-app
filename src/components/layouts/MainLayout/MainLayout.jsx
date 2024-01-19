import { Grid } from 'semantic-ui-react'
import { Outlet, useOutletContext } from 'react-router-dom'
import {
  ReceiptContextProvider,
  UserDetailsContextProvider,
  UserSettingsContextProvider
} from '../../../context'
import { NavigationMenu } from '../../NavigationMenu'
import './MainLayout.css'

export const MainLayout = () => {
  const { user } = useOutletContext()

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