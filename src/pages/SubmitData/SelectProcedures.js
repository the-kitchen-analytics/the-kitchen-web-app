import React, { useCallback, useMemo } from "react";
import { Form, Divider } from "semantic-ui-react";
import DisplayOptionsAccordition from "./DisplayOptionsAccordition";
import SelectedProceduresLabelGroup from "./SelectedProceduresLabelGroup";
import _ from "lodash";
import proceduresData from "../../data/operations.json";
import { TYPE_MANICURE, TYPE_PEDICURE, TYPE_SPA } from "../../data/procedureTypes";
import { useLocalStorage, useToggleState } from "../../hooks";
import { toggleSetter } from "../../utils/ui";
import ProceduresAccordition from "./ProceduresAccordition";

const SelectProcedures = ({ formData, setFormData, accorditionActiveIndex, setAccorditionActiveIndex }) => {

    const selectedIds = useMemo(() => formData.procedures.map(({ id }) => id), [formData.procedures]);

    const [shouldDisplayHalfPartProcedures, toggleShouldDisplayHalfPartProcedures] = useToggleState(false);

    const [shouldDisplayProcedurePrice, setShouldDisplayProcedurePrice] = useLocalStorage('shouldDisplayProcedurePrice', false);

    const [shouldDisplaySelectedProcedures, setShouldDisplaySelectedProcedures] = useLocalStorage('shouldDisplaySelectedProcedures', false);

    const halfPartProceduresFilter = useCallback((procedure) => {
        if (!shouldDisplayHalfPartProcedures) {
            return !procedure.name.startsWith('1/2');
        }

        return true;
    }, [shouldDisplayHalfPartProcedures]);

    const getTypeFilter = useCallback((type) => {
        return it => it.types.includes(type)
    }, [])

    const displayOptions = useMemo(() => ([
        {
            key: 'shouldDisplayHalfPartProcedures',
            label: 'Показывать 1/2 услуги',
            checked: shouldDisplayHalfPartProcedures,
            onChange: toggleShouldDisplayHalfPartProcedures,
        },
        {
            key: 'shouldDisplayProcedurePrice',
            label: 'Показывать стоимость услуги',
            checked: shouldDisplayProcedurePrice,
            onChange: () => toggleSetter(setShouldDisplayProcedurePrice)
        },
        {
            key: 'shouldDisplaySelectedProcedures',
            label: 'Показывать выбранные услуги',
            checked: shouldDisplaySelectedProcedures,
            onChange: () => toggleSetter(setShouldDisplaySelectedProcedures)
        }
    ]), [setShouldDisplayProcedurePrice, setShouldDisplaySelectedProcedures, shouldDisplayHalfPartProcedures, shouldDisplayProcedurePrice, shouldDisplaySelectedProcedures, toggleShouldDisplayHalfPartProcedures])

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
    }, [selectedIds])

    const accorditionItems = useMemo(() => ([
        createAccorditionItem(
            'Маникюр',
            proceduresData
                .filter(getTypeFilter(TYPE_MANICURE))
                .filter(halfPartProceduresFilter)
        ),

        createAccorditionItem(
            'Педикюр',
            proceduresData
                .filter(getTypeFilter(TYPE_PEDICURE))
                .filter(halfPartProceduresFilter),
        ),

        createAccorditionItem(
            'SPA-услуги',
            proceduresData
                .filter(getTypeFilter(TYPE_SPA))
        )
    ]), [createAccorditionItem, getTypeFilter, halfPartProceduresFilter])

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

            {
                shouldDisplaySelectedProcedures && (
                    <SelectedProceduresLabelGroup
                        procedures={formData.procedures}
                        handleRemove={removeProcedure}
                        shouldDisplayProcedurePrice={shouldDisplayProcedurePrice}
                    />
                )
            }

        </Form.Group>
    )
}

export default SelectProcedures;