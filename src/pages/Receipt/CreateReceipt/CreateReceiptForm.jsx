import _ from 'lodash'
import { useCallback } from 'react'
import { Form } from 'semantic-ui-react'
import { DatePicker } from '../../../components/ui/Input'
import { LoadableButton } from '../../../components/ui/Button'
import { handleInputChange } from '../../../utils/ui/form'
import { useUserSettings } from '../../../hooks'
import SelectProcedures from './SelectProcedures'
import Preview from './Preview'
import { useOutletContext } from 'react-router-dom'
import { getWorkerCategoryDisplayName } from '../../../utils/workerCategory'

const CreateReceiptForm = ({
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
}) => {

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