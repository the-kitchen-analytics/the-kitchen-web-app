import { useNavigate, useParams } from 'react-router-dom'
import { Form, Grid } from 'semantic-ui-react'
import { DataTable, Loader, MainHeader } from '../../components/shared'
import { ErrorMessage, GoBackButton } from '../../components/shared'
import { usePostData, useReceiptContext } from '../../hooks'
import { deleteReceiptById } from '../../services/receiptService'

export const EditReceiptPage = () => {

  const { id } = useParams()
  const { getReceiptById } = useReceiptContext()
  const [isLoading, error, postData] = usePostData()
  const navigate = useNavigate()
  const receipt = getReceiptById(id)

  const handleDeleteButtonClick = async () => {
    if (window.confirm('Вы действительно хотите удалить запись?')) {
      await postData(deleteReceiptById, id)
      navigate(-1)
    }
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <MainHeader content={'Просмотреть запись'} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          {
            error && <ErrorMessage message={error.message} />
          }
          {
            isLoading
              ? <Loader />
              : (receipt && <DataTable data={[[receipt]]} showNotes />)
          }
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Form>
            <Form.Group widths="equal">
              <Form.Field disabled={isLoading}>
                <GoBackButton />
              </Form.Field>

              <Form.Button
                disabled={isLoading}
                fluid
                size="large"
                icon="trash"
                type="button"
                negative
                content="Удалить"
                onClick={handleDeleteButtonClick}
              />
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
