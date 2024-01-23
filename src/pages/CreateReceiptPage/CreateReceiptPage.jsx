import _ from 'lodash'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { ErrorMessage, SuccessMessage, MainHeader } from '../../shared/components'
import { CreateReceiptForm } from './components'
import { usePostData, useProcedures, useUserDetailsContext, useMessage } from '../../shared/hooks'
import { createReceipt, mapReceiptToFirebaseEntity, validateReceipt } from '../../domain/receipt'
import { useAccordionActiveIndex, useReceipt } from './hooks'
import { RECEIPT_PATH } from '../../data/routePaths'

const ReceiptSavedMessage = ({ receipt }) => (
  <>
    Запись сохранена. <Link to={`${RECEIPT_PATH}/${receipt.id}`}>Нажмите, чтобы просмотреть</Link>
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
          <MainHeader content={'Добавить'} />
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