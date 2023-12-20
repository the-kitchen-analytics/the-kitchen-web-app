import { useCallback, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Grid, Segment } from 'semantic-ui-react'
import { ErrorMessage, Loader } from '../../components/ui'
import { useProcedures, useStreamReceiptData, useUserDetails } from '../../hooks'
import NavigationMenu from '../../components/NavigationMenu'

const Dashboard = ({ user: currentUser }) => {
  const [data, isLoading, error] = useStreamReceiptData({
    uid: currentUser.uid
  })

  const {
    userDetails,
    updateUserDetails,
    isLoading: isUserDetailsLoading
  } = useUserDetails(currentUser.uid)

  const procedures = useProcedures(userDetails.workerCategory)

  console.debug('procedures', procedures)
  const proceduresForSubmitData = procedures.filter(
    ({ workerCategory }) => workerCategory === userDetails.workerCategory
  )

  const getProcedureById = useCallback(
    (id) => {
      return procedures.find((procedure) => procedure.id === id)
    },
    [procedures]
  )

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
          procedures,
          proceduresForSubmitData,
          isUserDetailsLoading,
          updateUserDetails,
          getProcedureById,
          getReceiptById
        }}
      />
    )
  }, [isLoading, isUserDetailsLoading, data, userDetails, procedures, updateUserDetails, getProcedureById, getReceiptById])

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

export default Dashboard
