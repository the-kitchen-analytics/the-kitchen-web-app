import { Form, Button } from "semantic-ui-react";
import { LoadableButton } from "../../components/ui/Button";
import { getWorkerCategoryDisplayName } from "../../utils/workerCategory";
import { useUserSettings } from "../../hooks";

const EditProcedureForm = (props) => {

    const {
        isLoading,
        formData,
        handleSubmit,
        handleCancelButtonClick,
        handleInputChangeWrapper,
        handlePriceChange,
        handleWorkerRateChange,
        handleWorkerIncomeChange
    } = props;

    const { settings: { controlsSize, accentColor } } = useUserSettings();

    return (
        <Form size={controlsSize} onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Input
                    label="Название"
                    placeholder="Название"
                    value={formData.name}
                    name="name"
                    onChange={handleInputChangeWrapper}
                />

                <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Категория мастера"
                    placeholder="Категория мастера"
                    value={getWorkerCategoryDisplayName(formData.workerCategory)}
                    disabled
                />
            </Form.Group>

            <Form.Group widths='equal'>
                <Form.Input
                    min={0}
                    max={999}
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
                    min={0}
                    max={100}
                    type="number"
                    icon="percent"
                    iconPosition="left"
                    label="Заработок мастера (%)"
                    placeholder="Заработок мастера (%)"
                    value={(formData.workerRate * 100).toFixed(0)}
                    name="workerRate"
                    onChange={handleWorkerRateChange}
                />

                <Form.Input
                    min={0}
                    max={formData.price}
                    type="number"
                    icon="euro"
                    iconPosition="left"
                    label="Заработок мастера (€)"
                    placeholder="Заработок мастера (€)"
                    value={formData.workerIncome.toFixed(2)}
                    name="workerIncome"
                    onChange={handleWorkerIncomeChange}
                />
            </Form.Group>

            <Form.Group widths='equal'>
                <Form.Field>
                    <Button
                        fluid
                        icon="arrow left"
                        labelPosition='left'
                        content="Назад"
                        type="button"
                        size={controlsSize}
                        onClick={handleCancelButtonClick}
                    />
                </Form.Field>

                <Form.Field>
                    <LoadableButton
                        loading={isLoading}
                        fluid
                        size={controlsSize}
                        icon="save"
                        type="submit"
                        color={accentColor}
                        onClick={handleSubmit}
                        content="Сохранить"
                    // disabled={shouldDisableSubmitFormButton()}
                    />
                </Form.Field>
            </Form.Group>

        </Form>
    );
}

export default EditProcedureForm;