import { Form } from "semantic-ui-react";
import { GoBackButton, LoadableButton } from "../../components/ui/Button";
import { getWorkerCategoryDisplayName } from "../../utils/workerCategory";
import { useUserSettings } from "../../hooks";
import { useMemo } from "react";

const EditProcedureForm = (props) => {

    const {
        isLoading,
        formData,
        handleSubmit,
        handleInputChangeWrapper,
        handlePriceChange,
        handleWorkerRateChange,
        handleWorkerIncomeChange
    } = props;

    const { settings: { controlsSize, accentColor } } = useUserSettings();

    const workerRateInputProps = useMemo(() => {
        const workerRateInPercent = formData.workerRate ? (formData.workerRate * 100).toFixed(0) : 0;

        return {
            value: workerRateInPercent > 0 ? workerRateInPercent : '',
            placeholder: workerRateInPercent,
            min: 0,
            max: 100,
            type: 'number',
            icon: 'percent',
            iconPosition: 'left',
            label: 'Заработок мастера (%)',
            name: 'workerRate',
            onChange: handleWorkerRateChange,
        }

    }, [formData.workerRate, handleWorkerRateChange]);

    const workerIncomeInputProps = useMemo(() => {
        return {
            value: formData.workerIncome,
            placeholder: formData.workerIncome ? formData.workerIncome.toFixed(2) : 0,
            min: 0,
            max: formData.price,
            type: 'number',
            icon: 'euro',
            iconPosition: 'left',
            label: 'Заработок мастера (€)',
            name: 'workerIncome',
            onChange: handleWorkerIncomeChange,
        }

    }, [formData.workerIncome, formData.price, handleWorkerIncomeChange]);

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
                    {...workerRateInputProps}
                />

                <Form.Input
                    {...workerIncomeInputProps}
                />
            </Form.Group>

            <Form.Group widths='equal'>
                <Form.Field>
                    <GoBackButton />
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