import _ from 'lodash'
import { Form } from 'semantic-ui-react'
import { ProcedureTypeSelect, WorkerCategorySelect } from '../../../components/shared/dropdown'
import { GoBackButton } from '../../../components/ui/Button'
import { useUserSettings } from '../../../hooks'

const CreateProcedureForm = (props) => {

  const {
    isLoading,
    formData,
    shouldDisableSubmitButton,
    handleSubmit,
    handleInputChangeWrapper,
    handlePriceChange,
    handleWorkerRateChange,
    handleWorkerIncomeChange
  } = props

  const { settings: { controlsSize, accentColor } } = useUserSettings()

  const handleProcedureTypeChange = (e, { value }) => {
    handleInputChangeWrapper({ target: { name: 'type', value } })
  }

  const handleWorkerCategoryChange = (e, { value }) => {
    handleInputChangeWrapper({ target: { name: 'workerCategory', value } })
  }

  return (
    <Form size={controlsSize} onSubmit={handleSubmit}>

      <Form.Input
        required
        label="Название"
        placeholder="Название"
        value={formData.name}
        name="name"
        onChange={handleInputChangeWrapper}
      />

      <Form.Group widths='equal'>

        <ProcedureTypeSelect
          handleChange={handleProcedureTypeChange}
          value={formData.type}
        />

        <WorkerCategorySelect
          handleChange={handleWorkerCategoryChange}
          value={formData.workerCategory}
        />

      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Input
          required
          min={0}
          max={999}
          step="any"
          type="number"
          icon="euro"
          iconPosition="left"
          label="Стоимость услуги"
          placeholder="Стоимость услуги"
          value={formData.price}
          name="price"
          onChange={handlePriceChange}
        />

        <Form.Input
          value={formData.workerRate}
          placeholder={formData.workerRate || 0}
          min={0}
          max={100}
          step={'any'}
          type={'number'}
          icon={'percent'}
          iconPosition={'left'}
          label={'Заработок мастера (%)'}
          name={'workerRate'}
          onChange={handleWorkerRateChange}
        />

        <Form.Input
          required
          value={formData.workerIncome}
          placeholder={formData.workerIncome || 0}
          min={0}
          max={_.isNaN(formData.price) ? 0 : formData.price}
          step={'any'}
          type={'number'}
          icon={'euro'}
          iconPosition={'left'}
          label={'Заработок мастера (€)'}
          name={'workerIncome'}
          onChange={handleWorkerIncomeChange}
        />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Field>
          <GoBackButton />
        </Form.Field>

        <Form.Button
          loading={isLoading}
          fluid
          size={controlsSize}
          icon="save"
          type="submit"
          color={accentColor}
          content="Сохранить"
          disabled={shouldDisableSubmitButton}
        />
      </Form.Group>

    </Form>
  )
}

export default CreateProcedureForm