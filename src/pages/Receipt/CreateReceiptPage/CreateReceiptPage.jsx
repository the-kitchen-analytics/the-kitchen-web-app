import _ from 'lodash'
import { useMemo, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Grid, Message } from 'semantic-ui-react'
import { MainLayout } from '../../../components/layouts/'
import { CreateReceiptForm } from './CreateReceiptForm'
import { ErrorMessage } from '../../../components/shared'
import { usePostData, useProcedures, useSessionStorage } from '../../../hooks'
import { formatDateForDatePicker, getCurrentDate } from '../../../utils/'
import { createReceipt } from '../../../services/receiptService'
import { TABLE_DAILY } from '../../../data/routePaths'
import { mapReceiptToFirebaseEntity } from '../../../mappers/receipt'
import { validateReceipt } from '../../../validators/receipt'

const INITIAL_ACCORDITION_INDEX = -1

export const CreateReceiptPage = () => {

  const { userDetails: { uid, workerCategory } } = useOutletContext()
  const [procedures = [], isFetchingProcedures] = useProcedures(workerCategory)

  const [isSavingReceipt, error, postData] = usePostData()

  const [shouldDisplaySuccessMessage, setShouldDisplaySuccessMessage] = useState(false)

  const initialReceipt = useMemo(() => ({
    date: formatDateForDatePicker(getCurrentDate()),
    uid: uid,
    procedures: []
  }), [uid])

  const [receipt, setReceipt] = useSessionStorage(
    'submitFormData', initialReceipt)

  const [accorditionActiveIndex, setAccorditionActiveIndex] =
    useSessionStorage('accorditionActiveIndex', INITIAL_ACCORDITION_INDEX)

  const isReceiptValid = useMemo(() => validateReceipt(receipt), [receipt])
  const isLoading = isSavingReceipt || isFetchingProcedures

  const convertedFormData = useMemo(() => {
    return mapReceiptToFirebaseEntity(receipt)
  }, [receipt])

  const clearForm = () => {
    setReceipt(initialReceipt)
    setShouldDisplaySuccessMessage(false)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setShouldDisplaySuccessMessage(false)

    if (!shouldDisableSubmitFormButton()) {
      setAccorditionActiveIndex(INITIAL_ACCORDITION_INDEX)

      const receipt = await postData(createReceipt, convertedFormData)

      if (receipt.id) {
        clearForm()
        setShouldDisplaySuccessMessage(true)
      }
    }
  }

  const handleClearFromButtonClick = () => {
    setAccorditionActiveIndex(INITIAL_ACCORDITION_INDEX)
    clearForm()
  }

  const shouldDisableClearFormButton = () => {
    return _.isEqual(receipt, initialReceipt) || isSavingReceipt
  }

  const shouldDisableSubmitFormButton = () => {
    return isLoading || !isReceiptValid
  }

  return (
    <MainLayout
      icon="cloud upload"
      header="Сохранить запись"
    >
      <Grid.Row>
        <Grid.Column>
          {
            shouldDisplaySuccessMessage && (
              <Message
                positive
                icon="check circle"
                header="Данные успешно сохранены"
                content={
                  <>Перейдите в раздел <Link to={TABLE_DAILY}>Таблицы -{'>'} За день</Link>, чтобы просмотреть запись</>
                }
              />
            )
          }
          {
            error && (
              <ErrorMessage message={error.message} />
            )
          }
          <CreateReceiptForm
            formData={receipt}
            procedures={procedures}
            setFormData={setReceipt}
            convertedFormData={convertedFormData}
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
    </MainLayout>
  )
}