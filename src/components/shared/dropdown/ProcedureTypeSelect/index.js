import { Form } from "semantic-ui-react";
import { buildDropdownOptions } from "../../../../utils/ui/dropdown";
import procedureTypesJson from "../../../../data/procedure-types.json";

const procedureTypeOptions = buildDropdownOptions(
    procedureTypesJson,
    ({ id }) => id,
    ({ displayName }) => displayName,
    ({ name }) => name
)

const ProcedureTypeSelect = ({ value, options = procedureTypeOptions, handleChange }) => (
    <Form.Select
        required
        label="Выберите тип процедуры"
        placeholder='Нажмите, чтобы выбрать'
        fluid
        selection
        value={value}
        onChange={handleChange}
        options={options}
    />
);

export default ProcedureTypeSelect;