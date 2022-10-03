import { useCallback } from "react";
import { Form, Button } from "semantic-ui-react";
import { DatePicker } from "../../components/ui/Input";
import { LoadableButton } from "../../components/ui/Button";
import { handleInputChange } from "../../utils/ui/form";
import { useLocalStorage, useUserSettings } from "../../hooks";
import SelectProcedures from "./SelectProcedures";
import SelectWorkerCategory from "./SelectWorkerCategory";
import { buildDropdownOptions } from "../../utils/ui/dropdown";

import workerCatgoriesJson from "../../data/workerCategories.json";
import proceduresForMasterJson from "../../data/procedures-master.json";
import proceduresForTopMasterJson from "../../data/procedures-top-master.json";
import { useMemo } from "react";

const workerCategoryOptions = buildDropdownOptions(
    workerCatgoriesJson,
    ({ name }) => name,
    ({ displayName }) => displayName,
    ({ name }) => name
)

const SubmitDataForm = ({
    formData,
    setFormData,
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

    const [workerCategory, setWorkerCategory] = useLocalStorage('workerCategory', '');

    const handleInputChangeWrapper = useCallback((e) => handleInputChange(e, setFormData), [setFormData]);

    const getSubmitButtonLabel = useCallback(() => {
        return 'Сохранить ' + (formData.procedures.length > 0 ? `(${formData.procedures.length})` : '')
    }, [formData.procedures]);

    const handleWorkerCategoryChange = (e, { value }) => {
        setWorkerCategory(value);
        setFormData(prev => ({
            ...prev,
            procedures: []
        }))
    }

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


            <SelectWorkerCategory
                options={workerCategoryOptions}
                value={workerCategory}
                handleChange={handleWorkerCategoryChange}
            />

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