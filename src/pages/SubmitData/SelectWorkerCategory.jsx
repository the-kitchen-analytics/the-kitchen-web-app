import { Form } from "semantic-ui-react";

const SelectWorkerCategory = ({ value, options, handleChange }) => (
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

export default SelectWorkerCategory;