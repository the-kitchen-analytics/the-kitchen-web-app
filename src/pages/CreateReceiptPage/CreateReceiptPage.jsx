import _ from 'lodash'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { ErrorMessage, SuccessMessage, MainHeader } from '../../components/shared'
import { CreateReceiptForm } from './components'
import { usePostData, useProcedures, useUserDetailsContext, useMessage } from '../../hooks'
import { createReceipt } from '../../services/receiptService'
import { mapReceiptToFirebaseEntity } from '../../mappers/receipt'
import { validateReceipt } from '../../validators/receipt'
import { useAccordionActiveIndex, useReceipt } from './hooks'
import { RECEIPTS } from '../../data/routePaths'

const ReceiptSavedMessage = ({ receipt }) => (
  <>
    Запись успешно сохранена. <Link to={`${RECEIPTS}/${receipt.id}`}>Нажмите сюда чтобы просмотреть</Link>
  </>
)

export const CreateReceiptPage = () => {

  const [{ uid, workerCategory }] = useUserDetailsContext()
  const [procedures = [], isFetchingProcedures] = useProcedures(workerCategory)
  const [isSavingReceipt, error, postData] = usePostData()
  const [successMessage, setSuccessMessage, clearSuccessMessage] = useMessage(null)
  const [receipt, setReceipt, initialReceipt] = useReceipt(uid)
  const [accorditionActiveIndex, setAccorditionActiveIndex, resetAccordionActiveIndex] = useAccordionActiveIndex()

  const isLoading = isSavingReceipt || isFetchingProcedures

  const isReceiptValid = useMemo(() =>
    validateReceipt(receipt), [receipt])

  const convertedFormData = useMemo(() =>
    mapReceiptToFirebaseEntity(receipt), [receipt])

  const clearForm = () => {
    setReceipt(initialReceipt)
    clearSuccessMessage()
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    clearSuccessMessage()

    if (!shouldDisableSubmitFormButton()) {
      resetAccordionActiveIndex()

      const receipt = await postData(createReceipt, convertedFormData)

      if (receipt.id) {
        clearForm()
        setSuccessMessage(<ReceiptSavedMessage receipt={receipt} />)
      }
    }
  }

  const handleClearFromButtonClick = () => {
    resetAccordionActiveIndex()
    clearForm()
  }

  const shouldDisableClearFormButton = () => {
    return _.isEqual(receipt, initialReceipt) || isSavingReceipt
  }

  const shouldDisableSubmitFormButton = () => {
    return isLoading || !isReceiptValid
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <MainHeader content={'Сохранить'} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          {
            successMessage && (
              <SuccessMessage
                header={'Готово'}
                content={successMessage}
              />
            )
          }

          {
            error && (
              <ErrorMessage
                content={error.message}
              />
            )
          }
          <CreateReceiptForm
            formData={receipt}
            procedures={procedures}
            setFormData={setReceipt}
            receiptPreview={convertedFormData}
            workerCategory={workerCategory}
            accorditionActiveIndex={accorditionActiveIndex}
            setAccorditionActiveIndex={setAccorditionActiveIndex}
            isLoading={isLoading}
            handleFormSubmit={handleFormSubmit}
            handleClearFromButtonClick={handleClearFromButtonClick}
            shouldDisableSubmitFormButton={shouldDisableSubmitFormButton}
            shouldDisableClearFormButton={shouldDisableClearFormButton}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}