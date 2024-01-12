import { Container, Grid, Segment } from 'semantic-ui-react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { ReceiptContextProvider, UserDetailsContextProvider, UserSettingsContextProvider } from '../../../context'
import { NavigationMenu } from '../../NavigationMenu'

export const MainLayout = () => {
  const { user } = useOutletContext()

  return (
    <UserSettingsContextProvider>
      <NavigationMenu />
      <Container fluid className="m-1">
        <Grid centered>
          <Grid.Row>
            <Grid.Column
              computer={'12'}
              tablet={'14'}
              mobile={'16'}
            >
              <Segment padded>
                <UserDetailsContextProvider uid={user.uid}>
                  <ReceiptContextProvider uid={user.uid}>
                    <Outlet context={{ user }} />
                  </ReceiptContextProvider>
                </UserDetailsContextProvider>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </UserSettingsContextProvider>
  )
}