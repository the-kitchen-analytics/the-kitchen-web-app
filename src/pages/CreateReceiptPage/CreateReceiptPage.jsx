import _ from 'lodash'
import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { MainHeader } from '../../shared/components'
import { CreateReceiptForm, MessageBar } from './components'
import { useMessage, usePostData, useProcedures, useUserDetailsContext } from '../../shared/hooks'
import { createReceipt, mapReceiptToFirebaseEntity, validateReceipt } from '../../domain/receipt'
import { useAccordionActiveIndex, useReceipt } from './hooks'
import { RECEIPT_PATH } from '../../router'

const WARNING_MESSAGE = 'Выбран не сегодняшний день'

const ReceiptSavedMessage = ({ receipt }) => (
  <>
    <Link to={`${RECEIPT_PATH}/${receipt.id}`}>Запись</Link> сохранена.
    Нажмите, чтобы <Link to={RECEIPT_PATH}>просмотреть все</Link>
  </>
)

export const CreateReceiptPage = () => {

  const [{ uid, workerCategory }] = useUserDetailsContext()
  const [procedures = [], isFetchingProcedures] = useProcedures(workerCategory)
  const [isSavingReceipt, error, postData] = usePostData()
  const [successMessage, setSuccessMessage, clearSuccessMessage] = useMessage(null)
  const [receipt, setReceipt, initialReceipt] = useReceipt(uid)
  const [accordionActiveIndex, setAccordionActiveIndex, resetAccordionActiveIndex] = useAccordionActiveIndex()
  const [warningMessage, setWarningMessage, clearWarningMessage] = useMessage(null)

  const isLoading = isSavingReceipt || isFetchingProcedures
  const isReceiptValid = useMemo(() => validateReceipt(receipt), [receipt])

  const convertedFormData = useMemo(() =>
    mapReceiptToFirebaseEntity(receipt), [receipt])

  useEffect(() => {
    if (receipt.date !== initialReceipt.date) {
      setWarningMessage(WARNING_MESSAGE)
    } else {
      clearWarningMessage()
    }
  }, [receipt, initialReceipt])

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
          <MessageBar
            errorMessage={error?.message}
            successMessage={successMessage}
            warningMessage={warningMessage}
            clearWarningMessage={clearWarningMessage}
          />

          <CreateReceiptForm
            formData={receipt}
            procedures={procedures}
            setFormData={setReceipt}
            receiptPreview={convertedFormData}
            workerCategory={workerCategory}
            accordionActiveIndex={accordionActiveIndex}
            setAccordionActiveIndex={setAccordionActiveIndex}
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