import { Form } from "semantic-ui-react";
import { buildDropdownOptions } from "../../../../utils/ui/dropdown";
import workerCatgoriesJson from "../../../../data/workerCategories.json";

const workerCategoryOptions = buildDropdownOptions(
    workerCatgoriesJson,
    ({ name }) => name,
    ({ displayName }) => displayName,
    ({ name }) => name
)

const WorkerCategorySelect = ({ value, options = workerCategoryOptions, handleChange }) => (
    <Form.Select
        required
        label="Выберите квалификацию мастера"
        placeholder='Нажмите, чтобы выбрать'
        fluid
        selection
        value={value}
        onChange={handleChange}
        options={options}
    />
);

export default WorkerCategorySelect;