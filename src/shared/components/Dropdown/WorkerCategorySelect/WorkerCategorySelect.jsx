import { Form } from 'semantic-ui-react'
import { buildDropdownOptions } from '../../../utils'
import workerCategoriesJson from '../../../../data/worker-categories.json'

const workerCategoryOptions = buildDropdownOptions(
  workerCategoriesJson,
  ({ name }) => name,
  ({ displayName }) => displayName,
  ({ name }) => name
)

export const WorkerCategorySelect = ({ value, options = workerCategoryOptions, handleChange, ...props }) => (
  <Form.Select
    required
    label={'Квалификация мастера'}
    placeholder={'Нажмите, чтобы выбрать'}
    fluid
    value={value}
    onChange={handleChange}
    options={options}
    {...props}
  />
)
