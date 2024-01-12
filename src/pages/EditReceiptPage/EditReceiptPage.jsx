import { useNavigate, useParams } from 'react-router-dom'
import { Form, Grid } from 'semantic-ui-react'
import { DataTable, Loader } from '../../components/shared'
import { MainLayout } from '../../components/layouts'
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
    <MainLayout header={{ content: 'Просмотреть запись' }}>
      <Grid.Row>
        <Grid.Column>
          {
            error && <ErrorMessage message={error.message} />
          }
          {
            isLoading
              ? <Loader />
              : (receipt && <DataTable data={[[receipt]]} />)
          }
        </Grid.Column>

      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Form loading={isLoading}>
            <Form.Group widths="equal">
              <Form.Field>
                <GoBackButton />
              </Form.Field>

              <Form.Button
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
    </MainLayout>
  )
}
