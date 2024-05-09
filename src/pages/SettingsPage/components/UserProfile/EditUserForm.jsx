import { useCallback } from 'react'
import { Form } from 'semantic-ui-react'
import { ButtonGroup, SaveButton, WorkerCategorySelect } from '../../../../shared/components'
import { handleInputChange } from '../../../../shared/utils'
import { useTheme } from '../../../../shared/hooks'

export const EditUserForm = (props) => {

  const {
    formData, setFormData, handleSubmit,
    isLoading, handleResetButtonClick,
    shouldDisableSubmitButton, shouldDisableResetButton
  } = props

  const { name, email, workerCategory, description } = formData
  const { size } = useTheme()

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
      size={size}
    >
      <Form.Input
        required
        name={'name'}
        type={'text'}
        label={'Имя'}
        placeholder={'Имя'}
        value={name}
        onChange={handleInputChangeWrapper}
      />

      <Form.Group widths="equal">
        <Form.Input
          required
          disabled
          name={'email'}
          type={'email'}
          label={'Электронная почта'}
          placeholder={'Эл. почта'}
          value={email}
          onChange={handleInputChangeWrapper}
        />

        <WorkerCategorySelect
          value={workerCategory}
          handleChange={handleWorkerCategoryChange}
        />
      </Form.Group>

      <Form.TextArea
        label={'Обо мне'}
        name={'description'}
        type={'text'}
        placeholder={'Обо мне'}
        value={description}
        maxLength={250}
        onChange={handleInputChangeWrapper}
      />

      <ButtonGroup
        buttons={[
          {
            fluid: true,
            icon: 'cancel',
            type: 'button',
            disabled: shouldDisableResetButton(),
            onClick: handleResetButtonClick,
            content: 'Отменить'
          },
          {
            as: SaveButton,
            fluid: true,
            disabled: shouldDisableSubmitButton(),
            content: 'Сохранить'
          }
        ]}
      />
    </Form>
  )
}

export default EditUserForm
