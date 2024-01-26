import _ from 'lodash'
import { useCallback } from 'react'
import { Form, Placeholder } from 'semantic-ui-react'
import { ButtonGroup, DatePicker, SaveButton } from '../../../../shared/components'
import { ProcedureSelect } from '../ProcedureSelect'
import { handleInputChange, getWorkerCategoryDisplayName } from '../../../../shared/utils'
import { Preview } from './Preview'
import { useTheme } from '../../../../shared/hooks'

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

  const { size } = useTheme()
  const handleInputChangeWrapper = useCallback((e) => handleInputChange(e, setFormData), [setFormData])

  const getSubmitButtonLabel = useCallback(() => {
    return 'Сохранить' + (formData.procedures.length > 0 ? ` (${formData.procedures.length})` : '')
  }, [formData.procedures])

  return (
    <Form
      size={size}
      onSubmit={handleFormSubmit}
      loading={isLoading}
    >
      <Form.Group widths="equal">
        <Form.Field required>
          <DatePicker
            required={true}
            label={'Выберите день'}
            name={'date'}
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
        isLoading
          ? (
            <Placeholder>
              <Placeholder.Paragraph>
                {
                  _.range(0, 6).map((i) => <Placeholder.Line key={i} />)
                }
              </Placeholder.Paragraph>
            </Placeholder>
          )
          : (
            <ProcedureSelect
              procedures={procedures}
              formData={formData}
              setFormData={setFormData}
              accordionActiveIndex={accorditionActiveIndex}
              setAccordionActiveIndex={setAccorditionActiveIndex}
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