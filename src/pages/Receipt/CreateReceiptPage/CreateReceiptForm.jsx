import _ from 'lodash'
import { useCallback } from 'react'
import { Form } from 'semantic-ui-react'
import { DataTable } from '../../../components/DataTable'
import { DatePicker, LoadableButton } from '../../../components/shared'
import { ProcedureSelect } from './ProcedureSelect'
import { useUserSettings } from '../../../hooks'
import { handleInputChange, getWorkerCategoryDisplayName } from '../../../utils'

const Preview = ({ data }) => <DataTable data={data} />

export const CreateReceiptForm = (props) => {

  const {
    formData,
    procedures,
    setFormData,
    receiptPreview,
    workerCategory,
    accorditionActiveIndex,
    setAccorditionActiveIndex,
    isLoading,
    handleFormSubmit,
    handleClearFromButtonClick,
    shouldDisableClearFormButton,
    shouldDisableSubmitFormButton
  } = props

  const { settings: { accentColor } } = useUserSettings()

  const handleInputChangeWrapper = useCallback((e) => handleInputChange(e, setFormData), [setFormData])

  const getSubmitButtonLabel = useCallback(() => {
    return 'Сохранить ' + (formData.procedures.length > 0 ? `(${formData.procedures.length})` : '')
  }, [formData.procedures])

  return (
    <Form
      size="large"
      onSubmit={handleFormSubmit}
      loading={isLoading}
    >
      <Form.Group widths="equal">
        <Form.Field required>
          <DatePicker
            required={true}
            label="Выберите день"
            name="date"
            value={formData.date}
            handleChange={handleInputChangeWrapper}
          />
        </Form.Field>
        <Form.Input
          fluid
          required
          disabled
          label="Выберите квалификацию мастера"
          value={getWorkerCategoryDisplayName(workerCategory)}
        />
      </Form.Group>

      {
        !isLoading && (
          <ProcedureSelect
            procedures={procedures}
            formData={formData}
            setFormData={setFormData}
            accordionActiveIndex={accorditionActiveIndex}
            setAccordionActiveIndex={setAccorditionActiveIndex}
          />
        )
      }

      {
        !_.isEmpty(formData.procedures) && (
          <Form.Field>
            <Preview
              data={[[receiptPreview]]}
            />
          </Form.Field>
        )
      }

      <Form.Group widths="equal">
        <Form.Button
          fluid
          size="large"
          icon="trash"
          type="button"
          content="Очистить"
          disabled={shouldDisableClearFormButton()}
          onClick={handleClearFromButtonClick}
        />

        <Form.Field>
          <LoadableButton
            loading={isLoading}
            fluid
            size="large"
            icon="save"
            type="submit"
            content={getSubmitButtonLabel()}
            color={accentColor}
            onClick={handleFormSubmit}
            disabled={shouldDisableSubmitFormButton()}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  )
}

export default CreateReceiptForm