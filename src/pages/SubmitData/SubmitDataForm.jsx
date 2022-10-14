import _ from "lodash";
import { useCallback } from "react";
import { Form, Button } from "semantic-ui-react";
import { DatePicker } from "../../components/ui/Input";
import { LoadableButton } from "../../components/ui/Button";
import { handleInputChange } from "../../utils/ui/form";
import { useUserSettings } from "../../hooks";
import SelectProcedures from "./SelectProcedures";
import Preview from "./Preview";
import { useOutletContext } from "react-router-dom";

const SubmitDataForm = ({
    formData,
    setFormData,
    convertedFormData,
    accorditionActiveIndex,
    setAccorditionActiveIndex,
    shouldRedirectToHomePageAfterSubmit,
    setShouldRedirectToHomePageAfterSubmit,
    shouldDisplayPreview,
    setShouldDisplayPreview,
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

    const { proceduresForSubmitData } = useOutletContext();

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

            <SelectProcedures
                procedures={proceduresForSubmitData}
                formData={formData}
                setFormData={setFormData}
                accorditionActiveIndex={accorditionActiveIndex}
                setAccorditionActiveIndex={setAccorditionActiveIndex}
                shouldRedirectToHomePageAfterSubmit={shouldRedirectToHomePageAfterSubmit}
                setShouldRedirectToHomePageAfterSubmit={setShouldRedirectToHomePageAfterSubmit}
                shouldDisplayPreview={shouldDisplayPreview}
                setShouldDisplayPreview={setShouldDisplayPreview}
            />

            {
                shouldDisplayPreview && !_.isEmpty(formData.procedures) && (
                    <Form.Field>
                        <Preview
                            data={[[convertedFormData]]}
                        />
                    </Form.Field>
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