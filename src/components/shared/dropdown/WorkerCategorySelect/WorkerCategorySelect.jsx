import { Form } from "semantic-ui-react";
import { buildDropdownOptions } from "../../../../utils/ui/dropdown";
import workerCategoriesJson from "../../../../data/workerCategories.json";

const workerCategoryOptions = buildDropdownOptions(
    workerCategoriesJson,
    ({ name }) => name,
    ({ displayName }) => displayName,
    ({ name }) => name
)

const WorkerCategorySelect = ({ value, options = workerCategoryOptions, handleChange }) => (
    <Form.Select
        required
        label="Квалификация мастера"
        placeholder='Нажмите, чтобы выбрать'
        fluid
        selection
        value={value}
        onChange={handleChange}
        options={options}
    />
);

export default WorkerCategorySelect;