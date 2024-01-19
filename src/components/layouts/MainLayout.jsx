import { Grid } from 'semantic-ui-react'
import { Outlet, useOutletContext } from 'react-router-dom'
import {
  ReceiptContextProvider,
  UserDetailsContextProvider,
  UserSettingsContextProvider
} from '../../context'
import { NavigationMenu } from '../NavigationMenu'

export const MainLayout = () => {
  const { user } = useOutletContext()

  return (
    <UserSettingsContextProvider>
      <NavigationMenu />
      <Grid centered padded>
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
    </UserSettingsContextProvider>
  )
}