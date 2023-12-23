import { useCallback } from 'react'
import { Form } from 'semantic-ui-react'
import { WorkerCategorySelect } from '../../components/shared'
import { useUserSettings } from '../../hooks'
import { handleInputChange } from '../../utils'

export const EditUserForm = (props) => {
  
  const {
    formData, setFormData, handleSubmit,
    isLoading, handleResetButtonClick,
    shouldDisableSubmitButton, shouldDisableResetButton
  } = props

  const { settings: { controlsSize, accentColor } } = useUserSettings()
  const { name, email,workerCategory,description } = formData

  const handleInputChangeWrapper = useCallback((e) => {
    handleInputChange(e, setFormData)
  }, [setFormData])

  const handleWorkerCategoryChange = (e, { value: workerCategory }) => {
    setFormData(prev => ({
      ...prev,
      workerCategory
    }))
  }

  return (
    <Form
      onSubmit={handleSubmit}
      loading={isLoading}
      size={controlsSize}
    >
      <Form.Input
        required
        name="name"
        type="text"
        label="Имя"
        placeholder="Имя"
        value={name}
        onChange={handleInputChangeWrapper}
      />

      <Form.Group widths="equal">
        <Form.Input
          required
          disabled
          icon="at"
          iconPosition="left"
          name="email"
          type="email"
          label="Электронная почта"
          placeholder="Эл. почта"
          value={email}
          onChange={handleInputChangeWrapper}
        />

        <WorkerCategorySelect
          value={workerCategory}
          handleChange={handleWorkerCategoryChange}
        />
      </Form.Group>

      <Form.TextArea
        label="Обо мне"
        name="description"
        type="text"
        placeholder="Обо мне"
        value={description}
        maxLength={250}
        onChange={handleInputChangeWrapper}
      />

      <Form.Group widths="equal">
        <Form.Button
          fluid
          icon="cancel"
          type="button"
          disabled={shouldDisableResetButton()}
          onClick={handleResetButtonClick}
          size={controlsSize}
          content="Отменить"
        />
        <Form.Button
          fluid
          icon="save"
          type="submit"
          loading={isLoading}
          disabled={shouldDisableSubmitButton()}
          size={controlsSize}
          color={accentColor}
          content="Сохранить"
        />
      </Form.Group>

    </Form>
  )
}

export default EditUserForm