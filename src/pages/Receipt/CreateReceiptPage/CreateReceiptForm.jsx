import _ from 'lodash'
import { useCallback } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { DataTable } from '../../../components/DataTable'
import { DatePicker, LoadableButton } from '../../../components/shared'
import { useUserSettings } from '../../../hooks'
import { SelectProcedures } from './SelectProcedures'
import { handleInputChange, getWorkerCategoryDisplayName } from '../../../utils'

const Preview = ({ data }) => <DataTable data={data} />

export const CreateReceiptForm = (props) => {

  const {
    formData,
    setFormData,
    convertedFormData,
    workerCategory,
    accorditionActiveIndex,
    setAccorditionActiveIndex,
    shouldRedirectToHomePageAfterSubmit,
    setShouldRedirectToHomePageAfterSubmit,
    shouldDisplayPreview,
    setShouldDisplayPreview,
    isLoading,
    handleFormSubmit,
    handleClearFromButtonClick,
    shouldDisableClearFormButton,
    shouldDisableSubmitFormButton,
  } = props

  const { settings: { accentColor, controlsSize } } = useUserSettings()

  const handleInputChangeWrapper = useCallback((e) => handleInputChange(e, setFormData), [setFormData])

  const getSubmitButtonLabel = useCallback(() => {
    return 'Сохранить ' + (formData.procedures.length > 0 ? `(${formData.procedures.length})` : '')
  }, [formData.procedures])

  const { proceduresForSubmitData } = useOutletContext()

  return (
    <Form
      size={controlsSize}
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

      <SelectProcedures
        procedures={proceduresForSubmitData}
        formData={formData}
        setFormData={setFormData}
        accorditionActiveIndex={accorditionActiveIndex}
        setAccorditionActiveIndex={setAccorditionActiveIndex}
        shouldRedirectToHomePageAfterSubmit={shouldRedirectToHomePageAfterSubmit}
        setShouldRedirectToHomePageAfterSubmit={setShouldRedirectToHomePageAfterSubmit}
        shouldDisplayPreview={shouldDisplayPreview}
        setShouldDisplayPreview={setShouldDisplayPreview}
      />

      {
        shouldDisplayPreview && !_.isEmpty(formData.procedures) && (
          <Form.Field>
            <Preview
              data={[[convertedFormData]]}
            />
          </Form.Field>
        )
      }

      <Form.Group widths="equal">
        <Form.Button
          fluid
          size={controlsSize}
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
            size={controlsSize}
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