import React, { useCallback, useContext, useMemo, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { WorkerSelect } from "../../components/shared/dropdown";
import ProceduresCheckboxGroup from "./ProceduresCheckboxGroup";
import ApiServiceContext from "../../context/ApiServiceContext";
import { UserSettingsContext } from "../../context/UserSettingsContext";

import { formatDateForDatePicker, getCurrentDate, parseDateFromDropdown } from "../../utils/date";
import { handleInputChange } from "../../utils/ui/form";

import workersData from "../../data/kitchen-helpers.json";
import _ from "lodash";
import { DatePicker } from "../../components/ui/Input";
import { buildWorkerSelectOptions } from "../../utils/ui/dropdown";
import { useNavigate } from "react-router-dom";


const SubmitDataForm = () => {

    const navigate = useNavigate();

    const apiService = useContext(ApiServiceContext);
    const { settings: { accentColor } } = useContext(UserSettingsContext);

    const [formData, setFormData] = useState({
        date: formatDateForDatePicker(getCurrentDate()),
        worker: workersData.length === 1 ? workersData[0].name : '',
        procedures: []
    });

    const [isHttpRequestPerformed, setIsHttpRequestPerformed] = useState(false);

    const [workerSelectOptions] = useState(buildWorkerSelectOptions(workersData));

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
    }, [isDateFieldValid, isWorkerFieldValid, isProceduresFieldValid])

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsHttpRequestPerformed(true);

        apiService.postData({
            ...formData,
            date: parseDateFromDropdown(formData.date)
        }).then(() => {
            setIsHttpRequestPerformed(false);
            navigate('/')
        })
    }

    const shouldDisableWorkerSelect = useMemo(() => {
        return workerSelectOptions.length === 1 || isWorkerFieldValid()
    }, [workerSelectOptions, isWorkerFieldValid]);

    const handleRemoveAllProcedures = () => {
        setFormData(oldData => ({
            ...oldData,
            procedures: []
        }));
    }

    return (
        <Form
            method="post"
            onSubmit={handleFormSubmit}
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

            <Form.Field required>
                <WorkerSelect
                    label='Выберите мастера'
                    name="worker"
                    value={formData.worker}
                    isDisabled={shouldDisableWorkerSelect}
                    options={workerSelectOptions}
                    handleChange={handleInputChangeWrapper}
                    isInvalid={!isWorkerFieldValid()}
                />
            </Form.Field>

            <ProceduresCheckboxGroup
                formData={formData}
                setFormData={setFormData}
            />

            <Form.Field>
                <Button.Group
                    size="large"
                    fluid
                >
                    <Button
                        type="button"
                        content="Очистить"
                        disabled={_.isEmpty(formData.procedures) || isHttpRequestPerformed}
                        icon="trash"
                        onClick={handleRemoveAllProcedures}
                    />

                    <Button
                        icon="save"
                        type="submit"
                        color={accentColor}
                        content="Сохранить"
                        disabled={!isFormDataValid() || isHttpRequestPerformed}
                        loading={isHttpRequestPerformed}
                    />
                </Button.Group>
            </Form.Field>
        </Form>
    )
}

export default SubmitDataForm;