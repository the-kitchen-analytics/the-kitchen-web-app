import _ from "lodash";
import { useCallback, useMemo } from "react";
import { Form, Divider } from "semantic-ui-react";
import DisplayOptionsAccordition from "./DisplayOptionsAccordition";
import { useLocalStorage, useToggleState } from "../../../hooks";
import { toggleSetter } from "../../../utils/ui";
import ProceduresAccordition from "./ProceduresAccordition";

import procedureTypes from "../../../data/procedure-types.json";

const SelectProcedures = ({
    formData, setFormData,
    accorditionActiveIndex, setAccorditionActiveIndex,
    procedures,
    shouldRedirectToHomePageAfterSubmit,
    setShouldRedirectToHomePageAfterSubmit,
    shouldDisplayPreview,
    setShouldDisplayPreview,
}) => {

    const selectedIds = useMemo(() => formData.procedures.map(({ id }) => id), [formData.procedures]);

    const [shouldDisplayHalfPartProcedures, toggleShouldDisplayHalfPartProcedures] = useToggleState(false);

    const [shouldDisplayProcedurePrice, setShouldDisplayProcedurePrice] = useLocalStorage('shouldDisplayProcedurePrice', false);

    const halfPartProceduresFilter = useCallback((procedure) => {
        if (!shouldDisplayHalfPartProcedures) {
            return !procedure.name.startsWith('1/2');
        }

        return true;
    }, [shouldDisplayHalfPartProcedures]);

    const getTypeFilter = useCallback((type) => {
        return it => it.type === type
    }, []);

    const displayOptions = useMemo(() => ([
        {
            key: 'shouldDisplayHalfPartProcedures',
            label: 'Показывать 1/2 услуги',
            checked: shouldDisplayHalfPartProcedures,
            onChange: toggleShouldDisplayHalfPartProcedures,
        },
        {
            key: 'shouldDisplayPreview',
            label: 'Показывать превью выбранных услуг',
            checked: shouldDisplayPreview,
            onChange: () => toggleSetter(setShouldDisplayPreview)
        },
        {
            key: 'shouldDisplayProcedurePrice',
            label: 'Показывать стоимость услуги',
            checked: shouldDisplayProcedurePrice,
            onChange: () => toggleSetter(setShouldDisplayProcedurePrice)
        },
        {
            key: 'shouldRedirectToHomePageAfterSubmit',
            label: 'Переходить на главную после отправки формы',
            checked: shouldRedirectToHomePageAfterSubmit,
            onChange: () => toggleSetter(setShouldRedirectToHomePageAfterSubmit)
        },
    ]), [
        shouldDisplayHalfPartProcedures, toggleShouldDisplayHalfPartProcedures,
        shouldDisplayProcedurePrice, setShouldDisplayProcedurePrice,
        shouldRedirectToHomePageAfterSubmit, setShouldRedirectToHomePageAfterSubmit,
        shouldDisplayPreview, setShouldDisplayPreview,
    ])

    const addProcedure = useCallback((procedure) => {
        setFormData((prevData) => ({
            ...prevData,
            procedures: _.uniqBy([...prevData.procedures, procedure], 'id')
        }))
    }, [setFormData])

    const removeProcedure = useCallback((procedure) => {
        setFormData((prevData) => ({
            ...prevData,
            procedures: _.uniqBy([...prevData.procedures.filter(it => it.id !== procedure.id)], 'id')
        }))
    }, [setFormData]);

    const handleProcedureItemChange = useCallback((procedure, checked) => {
        checked ? addProcedure(procedure) : removeProcedure(procedure)
    }, [addProcedure, removeProcedure]);

    const createAccorditionItem = useCallback((title, data) => {

        const count = selectedIds
            .filter(selectedId => data.map(({ id }) => id).includes(selectedId))
            .length;

        return {
            title,
            data,
            count
        }
    }, [selectedIds]);

    const accorditionItems = useMemo(() => {
        return procedureTypes.map(procedureType => createAccorditionItem(
            procedureType.displayName,
            procedures
                .filter(getTypeFilter(procedureType.name))
                .filter(halfPartProceduresFilter)
        ));
    }, [createAccorditionItem, getTypeFilter, halfPartProceduresFilter, procedures])

    return (
        <Form.Group grouped required>

            <Form.Field label="Выберите набор услуг" required />

            <Form.Field>
                <DisplayOptionsAccordition
                    options={displayOptions}
                />
            </Form.Field>

            <Form.Field>
                <ProceduresAccordition
                    shouldDisplayProcedurePrice={shouldDisplayProcedurePrice}
                    procedures={formData.procedures}
                    accorditionItems={accorditionItems}
                    accorditionActiveIndex={accorditionActiveIndex}
                    handleProcedureItemChange={handleProcedureItemChange}
                    setAccorditionActiveIndex={setAccorditionActiveIndex}
                />
                <Divider hidden />
            </Form.Field>

        </Form.Group>
    )
}

export default SelectProcedures;