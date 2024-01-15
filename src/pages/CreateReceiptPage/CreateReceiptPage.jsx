import _ from 'lodash'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Message } from 'semantic-ui-react'
import { ErrorMessage, MainHeader } from '../../components/shared'
import { CreateReceiptForm } from './components'
import { usePostData, useProcedures, useUserDetailsContext } from '../../hooks'
import { createReceipt } from '../../services/receiptService'
import { TABLE } from '../../data/routePaths'
import { mapReceiptToFirebaseEntity } from '../../mappers/receipt'
import { validateReceipt } from '../../validators/receipt'
import { useAccordionActiveIndex, useReceipt } from './hooks'

export const CreateReceiptPage = () => {

  const [{ uid, workerCategory }] = useUserDetailsContext()
  const [procedures = [], isFetchingProcedures] = useProcedures(workerCategory)
  const [isSavingReceipt, error, postData] = usePostData()
  const [shouldDisplaySuccessMessage, setShouldDisplaySuccessMessage] = useState(false)
  const [receipt, setReceipt, initialReceipt] = useReceipt(uid)
  const [accorditionActiveIndex, setAccorditionActiveIndex, resetAccordionActiveIndex] = useAccordionActiveIndex()

  const isLoading = isSavingReceipt || isFetchingProcedures

  const isReceiptValid = useMemo(() =>
    validateReceipt(receipt), [receipt])

  const convertedFormData = useMemo(() =>
    mapReceiptToFirebaseEntity(receipt), [receipt])

  const clearForm = () => {
    setReceipt(initialReceipt)
    setShouldDisplaySuccessMessage(false)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setShouldDisplaySuccessMessage(false)

    if (!shouldDisableSubmitFormButton()) {
      resetAccordionActiveIndex()

      const receipt = await postData(createReceipt, convertedFormData)

      if (receipt.id) {
        clearForm()
        setShouldDisplaySuccessMessage(true)
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
            shouldDisplaySuccessMessage && (
              <Message
                positive
                icon="check circle"
                header="Данные успешно сохранены"
                content={
                  <>Перейдите в раздел <Link to={TABLE}>Таблицы -{'>'} За день</Link>, чтобы просмотреть запись</>
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