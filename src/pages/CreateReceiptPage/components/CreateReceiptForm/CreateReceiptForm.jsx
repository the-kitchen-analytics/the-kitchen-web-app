import _ from 'lodash'
import { useCallback } from 'react'
import { Form } from 'semantic-ui-react'
import {
  ButtonGroup,
  DatePicker,
  PlaceholderParagraph,
  SaveButton,
  WorkerCategorySelect
} from '../../../../shared/components'
import { ProcedureSelect } from '../ProcedureSelect'
import { handleInputChange } from '../../../../shared/utils'
import { Preview } from './Preview'
import { useTheme } from '../../../../shared/hooks'

export const CreateReceiptForm = (props) => {

  const {
    formData,
    procedures,
    setFormData,
    receiptPreview,
    workerCategory,
    setWorkerCategory,
    accordionActiveIndex,
    setAccordionActiveIndex,
    isLoading,
    handleFormSubmit,
    handleClearFromButtonClick,
    shouldDisableClearFormButton,
    shouldDisableSubmitFormButton
  } = props

  const { size } = useTheme()
  const handleInputChangeWrapper = useCallback((e) => handleInputChange(e, setFormData), [setFormData])

  const getSubmitButtonLabel = useCallback(() => {
    return 'Сохранить' + (formData.procedures.length > 0 ? ` (${formData.procedures.length})` : '')
  }, [formData.procedures])

  const handleWorkerCategoryChange = (e, { value }) => {
    setWorkerCategory(value)
  }

  return (
    <Form
      size={size}
      onSubmit={handleFormSubmit}
      loading={isLoading}
    >
      <Form.Group widths="equal">
        <Form.Field required>
          <DatePicker
            sizeDefault
            maxToday
            required={true}
            label={'Выберите день'}
            name={'date'}
            value={formData.date}
            handleChange={handleInputChangeWrapper}
          />
        </Form.Field>
        <Form.Field>
          <WorkerCategorySelect
            label="Выберите квалификацию мастера"
            value={workerCategory}
            handleChange={handleWorkerCategoryChange}
          />
        </Form.Field>
      </Form.Group>

      {
        isLoading
          ? <PlaceholderParagraph lines={6} />
          : (
            <ProcedureSelect
              procedures={procedures}
              formData={formData}
              setFormData={setFormData}
              accordionActiveIndex={accordionActiveIndex}
              setAccordionActiveIndex={setAccordionActiveIndex}
            />
          )
      }

      <Form.Field>
        <Form.TextArea
          disabled={isLoading}
          value={formData.notes}
          label={'Комментарий'}
          placeholder={'Ваш комментарий к записи (0-150 символов)'}
          maxLength={150}
          name={'notes'}
          onChange={handleInputChangeWrapper}
        />
      </Form.Field>

      {
        !_.isEmpty(formData.procedures) && (
          <Form.Field>
            <Preview
              data={[[receiptPreview]]}
            />
          </Form.Field>
        )
      }

      <ButtonGroup
        buttons={[
          {
            fluid: true,
            icon: 'trash',
            type: 'button',
            content: 'Очистить',
            disabled: shouldDisableClearFormButton(),
            onClick: handleClearFromButtonClick
          },
          {
            as: SaveButton,
            fluid: true,
            content: getSubmitButtonLabel(),
            disabled: shouldDisableSubmitFormButton()
          }
        ]}
      />
    </Form>
  )
}

export default CreateReceiptForm
