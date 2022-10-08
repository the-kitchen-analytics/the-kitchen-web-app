import { useCallback } from "react";
import { Form, Button } from "semantic-ui-react";
import { DatePicker } from "../../components/ui/Input";
import { LoadableButton } from "../../components/ui/Button";
import { handleInputChange } from "../../utils/ui/form";
import { useUserSettings } from "../../hooks";
import SelectProcedures from "./SelectProcedures";
import proceduresForMasterJson from "../../data/procedures-master.json";
import proceduresForTopMasterJson from "../../data/procedures-top-master.json";
import { useMemo } from "react";

const SubmitDataForm = ({
    formData,
    setFormData,
    workerCategory,
    accorditionActiveIndex,
    setAccorditionActiveIndex,
    shouldRedirectToHomePageAfterSubmit,
    setShouldRedirectToHomePageAfterSubmit,
    isLoading,
    handleFormSubmit,
    handleClearFromButtonClick,
    shouldDisableClearFormButton,
    shouldDisableSubmitFormButton,
    isDateFieldValid,
}) => {

    const { settings: { accentColor, controlsSize } } = useUserSettings();

    const handleInputChangeWrapper = useCallback((e) => handleInputChange(e, setFormData), [setFormData]);

    const getSubmitButtonLabel = useCallback(() => {
        return 'Сохранить ' + (formData.procedures.length > 0 ? `(${formData.procedures.length})` : '')
    }, [formData.procedures]);

    const proceduresData = useMemo(() => {
        switch (workerCategory) {
            case 'master': return proceduresForMasterJson;
            case 'top-master': return proceduresForTopMasterJson;
            default: return [];
        }
    }, [workerCategory])

    return (
        <Form
            size={controlsSize}
            onSubmit={handleFormSubmit}
            loading={isLoading}
        >
            <Form.Field required>
                <DatePicker
                    required={true}
                    isInvalid={!isDateFieldValid()}
                    label="Выберите день"
                    name="date"
                    value={formData.date}
                    handleChange={handleInputChangeWrapper}
                />
            </Form.Field>

            {
                workerCategory && (
                    <SelectProcedures
                        procedures={proceduresData}
                        formData={formData}
                        setFormData={setFormData}
                        accorditionActiveIndex={accorditionActiveIndex}
                        setAccorditionActiveIndex={setAccorditionActiveIndex}
                        shouldRedirectToHomePageAfterSubmit={shouldRedirectToHomePageAfterSubmit}
                        setShouldRedirectToHomePageAfterSubmit={setShouldRedirectToHomePageAfterSubmit}
                    />
                )
            }

            <Form.Field>
                <Button
                    fluid
                    size={controlsSize}
                    type="button"
                    content="Очистить"
                    disabled={shouldDisableClearFormButton()}
                    icon="trash"
                    onClick={handleClearFromButtonClick}
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
                    onClick={handleFormSubmit}
                    content={getSubmitButtonLabel()}
                    disabled={shouldDisableSubmitFormButton()}
                />
            </Form.Field>
        </Form>
    )
}

export default SubmitDataForm;