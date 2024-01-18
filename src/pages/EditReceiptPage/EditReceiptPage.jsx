import { useNavigate, useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { ButtonGroup, DataTable, Loader, MainHeader } from '../../components/shared'
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
            error && <ErrorMessage content={error.message} />
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
          <ButtonGroup
            buttons={[
              {
                as: GoBackButton
              },
              {
                disabled: isLoading,
                fluid: true,
                size: 'large',
                icon: 'trash',
                type: 'button',
                negative: true,
                content: 'Удалить',
                onClick: handleDeleteButtonClick
              }
            ]}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
