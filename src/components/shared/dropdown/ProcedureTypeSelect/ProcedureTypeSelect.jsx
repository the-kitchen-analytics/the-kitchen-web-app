import { Form } from 'semantic-ui-react'
import { buildDropdownOptions } from '../../../../utils'
import procedureTypesJson from '../../../../data/procedure-types.json'

const procedureTypeOptions = buildDropdownOptions(
  procedureTypesJson,
  ({ id }) => id,
  ({ displayName }) => displayName,
  ({ name }) => name
)

export const ProcedureTypeSelect = ({ value, options = procedureTypeOptions, handleChange }) => (
  <Form.Select
    required
    label="Тип процедуры"
    placeholder='Нажмите, чтобы выбрать'
    fluid
    selection
    value={value}
    onChange={handleChange}
    options={options}
  />
)