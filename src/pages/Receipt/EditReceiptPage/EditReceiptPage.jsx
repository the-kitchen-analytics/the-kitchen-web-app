import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { Form, Grid } from 'semantic-ui-react'
import { DataTable } from '../../../components/shared/'
import { MainLayout } from '../../../components/layouts'
import { ErrorMessage, NoContent, GoBackButton } from '../../../components/shared'
import { usePostData } from '../../../hooks'
import { deleteReceiptById } from '../../../services/receiptService'

export const EditReceiptPage = () => {

  const { id } = useParams()
  const { getReceiptById } = useOutletContext()

  const [isLoading, error, postData] = usePostData()
  const navigate = useNavigate()
  const receipt = getReceiptById(id)

  if (!receipt) {
    return <NoContent />
  }

  const handleDeleteButtonClick = async () => {
    if (window.confirm('Вы действительно хотите удалить запись?')) {
      await postData(deleteReceiptById, id)
      navigate(-1)
    }
  }

  return (
    <MainLayout
      header={{
        content: `Запись от ${receipt.dateFormatted}`,
        subheader: 'Детализация записи клиента'
      }}
    >
      <Grid.Row>
        <Grid.Column>
          {
            error && <ErrorMessage message={error.message} />
          }

          <DataTable data={[[receipt]]} />

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
