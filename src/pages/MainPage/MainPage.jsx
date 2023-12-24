import { useCallback, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Grid, Segment } from 'semantic-ui-react'
import { ErrorMessage, Loader } from '../../components/shared'
import { useReceipts, useUserDetails } from '../../hooks'
import { NavigationMenu } from '../../components/NavigationMenu'

export const MainPage = ({ user: currentUser }) => {
  const [data, isLoading, error] = useReceipts({
    uid: currentUser.uid
  })

  const {
    userDetails,
    updateUserDetails,
    isLoading: isUserDetailsLoading
  } = useUserDetails(currentUser.uid)

  const getReceiptById = useCallback(
    (id) => {
      if (data) {
        return data.receipts.find((receipt) => receipt.id === id)
      }

      return null
    },
    [data]
  )

  const outlet = useMemo(() => {
    if (isLoading) {
      return (
        <Container style={{ minHeight: '50vh' }}>
          <Loader content="Загрузка данных" />
        </Container>
      )
    }

    if (isUserDetailsLoading) {
      return (
        <Container style={{ minHeight: '50vh' }}>
          <Loader content="Загрузка данных о пользователе" />
        </Container>
      )
    }

    return (
      <Outlet
        context={{
          ...data,
          userDetails,
          updateUserDetails,
          getReceiptById
        }}
      />
    )
  }, [isLoading, data, userDetails, updateUserDetails, getReceiptById])

  return (
    <>
      <NavigationMenu />
      <Container>
        <Grid centered padded stackable>
          {error && <ErrorMessage message={error} />}
          <Grid.Row>
            <Grid.Column stretched>
              <Grid.Row>
                <Grid.Column>
                  <Segment padded>{outlet}</Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}
