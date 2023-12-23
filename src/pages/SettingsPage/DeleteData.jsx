import { useNavigate, useOutletContext } from 'react-router-dom'
import { Header, Segment, Message, Grid } from 'semantic-ui-react'
import { LoadableButton } from '../../components/shared/Button'
import { useUserSettings } from '../../hooks'
import { deleteAllReceiptByUid } from '../../services/receiptService'

const DeleteData = () => {

  const navigate = useNavigate()
  const { userDetails } = useOutletContext()
  

  const handleDeleteDataButtonClick = async (e) => {
    e.preventDefault()

    if (window.confirm('Вы уверены, что хотите стереть все данные?')) {
      localStorage.clear()

      deleteAllReceiptByUid(userDetails.uid)

      navigate('/')
    }

  }

  return (
    <Segment>
      <Header
        icon="trash"
        content="Стереть данные о процедурах"
      />

      <Message
        error
        header='Внимание!'
        content='Все данные о Ваших процедурах будут удалены навсегда без возможности восстановления в будущем'
      />

      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} computer={6}>
            <LoadableButton
              fluid
              type="button"
              content="Стереть данные"
              icon="trash"
              negative
              size="large"
              onClick={handleDeleteDataButtonClick}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DeleteData