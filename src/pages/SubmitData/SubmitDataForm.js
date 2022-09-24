import React, { useCallback, useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import SelectProcedures from "./SelectProcedures";
import ApiServiceContext from "../../context/ApiServiceContext";
import { UserSettingsContext } from "../../context/UserSettingsContext";

import { formatDateForDatePicker, getCurrentDate, parseDateFromDropdown } from "../../utils/date";
import { handleInputChange } from "../../utils/ui/form";

import _ from "lodash";
import { DatePicker } from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks";
import { LoadableButton } from "../../components/ui/Button";

const INITIAL_FORM_DATA = Object.freeze({
    date: formatDateForDatePicker(getCurrentDate()),
    procedures: []
});

const INITIAL_ACORDITION_INDEX = -1;

const SubmitDataForm = ({ refreshData }) => {

    const navigate = useNavigate();

    const apiService = useContext(ApiServiceContext);
    const { settings: { accentColor } } = useContext(UserSettingsContext);

    const [formData, setFormData] = useLocalStorage('submitDataForm', INITIAL_FORM_DATA);
    const [accorditionActiveIndex, setAccorditionActiveIndex] = useLocalStorage(INITIAL_ACORDITION_INDEX);
    const [isHttpRequestPerformed, setIsHttpRequestPerformed] = useState(false);

    const handleInputChangeWrapper = useCallback((e) => handleInputChange(e, setFormData), [setFormData]);

    const isDateFieldValid = useCallback(() => !!formData.date, [formData.date]);

    const isWorkerFieldValid = useCallback(() => !!formData.worker, [formData.worker]);

    const isProceduresFieldValid = useCallback(() => !_.isEmpty(formData.procedures), [formData.procedures]);

    const isFormDataValid = useCallback(() => {
        if (!isDateFieldValid()) {
            return false;
        }

        if (!isWorkerFieldValid()) {
            return false;
        }

        if (!isProceduresFieldValid()) {
            return false;
        }

        return true;
    }, [isDateFieldValid, isWorkerFieldValid, isProceduresFieldValid]);

    const clearForm = useCallback(() => {
        setFormData(INITIAL_FORM_DATA)
    }, [setFormData]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsHttpRequestPerformed(true);
        setAccorditionActiveIndex(INITIAL_ACORDITION_INDEX);

        apiService.postData({
            ...formData,
            date: parseDateFromDropdown(formData.date)
        }).then(() => {
            setIsHttpRequestPerformed(false);
            clearForm();
            refreshData();
            navigate('/');
        });
    }

    const getSubmitButtonLabel = useCallback(() => {
        return 'Сохранить ' + (formData.procedures.length > 0 ? `(${formData.procedures.length})` : '')
    }, [formData.procedures]);

    const handleClearFromButtonClick = useCallback(() => {
        setAccorditionActiveIndex(INITIAL_ACORDITION_INDEX);
        clearForm();
    }, [setAccorditionActiveIndex, clearForm]);

    const shouldDisableClearFormButton = useCallback(() => {
        return _.isEqual(formData, INITIAL_FORM_DATA) || isHttpRequestPerformed
    }, [formData, isHttpRequestPerformed]);

    return (
        <Form
            size="large"
            onSubmit={handleFormSubmit}
            loading={isHttpRequestPerformed}
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
                formData={formData}
                setFormData={setFormData}
                accorditionActiveIndex={accorditionActiveIndex}
                setAccorditionActiveIndex={setAccorditionActiveIndex}
            />

            <Form.Field>
                <Button
                    fluid
                    size="large"
                    type="button"
                    content="Очистить"
                    disabled={shouldDisableClearFormButton()}
                    icon="trash"
                    onClick={handleClearFromButtonClick}
                />
            </Form.Field>

            <Form.Field>
                <LoadableButton
                    fluid
                    size="large"
                    icon="save"
                    type="submit"
                    color={accentColor}
                    onClick={handleFormSubmit}
                    content={getSubmitButtonLabel()}
                    disabled={!isFormDataValid() || isHttpRequestPerformed}
                    loading={isHttpRequestPerformed}
                />
            </Form.Field>
        </Form>
    )
}

export default SubmitDataForm;