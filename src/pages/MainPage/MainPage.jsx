import { useCallback, useMemo } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { Container, Grid, Segment } from 'semantic-ui-react'
import { ErrorMessage, Loader } from '../../components/shared'
import { useReceipts, useUserDetails } from '../../hooks'
import { NavigationMenu } from '../../components/NavigationMenu'

export const MainPage = () => {
  const { user } = useOutletContext()
  const [data, isLoading, error] = useReceipts({ uid: user.uid })

  const {
    userDetails,
    updateUserDetails,
    isLoading: isUserDetailsLoading
  } = useUserDetails(user.uid)

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
          user,
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
      <Container fluid className='m-1'>
        <Grid centered>

          {error && <ErrorMessage message={error} />}

          <Grid.Row>
            <Grid.Column
              computer={'12'}
              tablet={'14'}
              mobile={'16'}
            >
              <Segment size={'large'}>{outlet}</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}
