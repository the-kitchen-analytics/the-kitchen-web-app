import React, { useState, useCallback, useMemo } from "react";
import { Accordion, Form, Label, Divider } from "semantic-ui-react";
import AccorditionItem from "./AccorditionItem";
import _ from "lodash";

import proceduresData from "../../data/operations.json";
import { TYPE_MANICURE, TYPE_PEDICURE, TYPE_SPA } from "../../data/procedureTypes";
import { buildPriceString } from "../../utils/money";

const ProceduresCheckboxGroup = ({ formData, setFormData }) => {

    const [shouldDisplayHalfPartProcedures, setShouldDisplayHalfPartProcedures] = useState(false);
    const [shouldDisplayProcedurePrice, setShouldDisplayProcedurePrice] = useState(false);
    const [accorditionActiveIndex, setAccorditionActiveIndex] = useState(-1);

    const handleAccorditionChange = (e, titleProps) => {
        const { index } = titleProps
        setAccorditionActiveIndex(activeIndex => activeIndex === index ? -1 : index)
    }

    const halfPartProceduresFilter = useCallback((procedure) => {
        if (!shouldDisplayHalfPartProcedures) {
            return !procedure.name.startsWith('1/2')
        }

        return true;
    }, [shouldDisplayHalfPartProcedures]);

    const getTypeFilter = useCallback((type) => {
        return it => it.type === type
    }, [])

    const toggleShouldDisplayHalfPartProcedures = () => {
        setShouldDisplayHalfPartProcedures(value => !value);
    }

    const toggleShouldDisplayProcedurePrice = () => {
        setShouldDisplayProcedurePrice(value => !value);
    }

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

    const procedureToCheckboxItem = useCallback((procedure) => (
        <Form.Checkbox
            key={procedure.id}
            name={procedure.name}
            label={
                shouldDisplayProcedurePrice
                    ? buildPriceString(procedure.name, procedure.priceBeforeTaxes)
                    : procedure.name
            }
            onChange={(event, { checked }) => handleProcedureItemChange(procedure, checked)}
            checked={formData.procedures.includes(procedure)}
        />
    ), [formData, handleProcedureItemChange, shouldDisplayProcedurePrice]);

    const accorditionItems = useMemo(() => ([
        {
            title: 'Маникюр',
            data: proceduresData
                .filter(getTypeFilter(TYPE_MANICURE))
                .filter(halfPartProceduresFilter)
        },

        {
            title: 'Педикюр',
            data: proceduresData
                .filter(getTypeFilter(TYPE_PEDICURE))
                .filter(halfPartProceduresFilter)
        },

        {
            title: 'SPA-услуги',
            data: proceduresData
                .filter(getTypeFilter(TYPE_SPA))
        }
    ]), [getTypeFilter, halfPartProceduresFilter])

    return (
        <Form.Group grouped required>
            <Form.Field label="Выберите набор услуг" required />

            <Form.Field>
                <Form.Checkbox
                    label="Скрыть 1/2 услуги"
                    checked={!shouldDisplayHalfPartProcedures}
                    onChange={toggleShouldDisplayHalfPartProcedures}
                />
            </Form.Field>

            <Form.Field>
                <Form.Checkbox
                    label="Показывать стоимость услуги"
                    checked={shouldDisplayProcedurePrice}
                    onChange={toggleShouldDisplayProcedurePrice}
                />
            </Form.Field>

            <Accordion>

                {
                    accorditionItems.map(({ title, data }, index) => (
                        <AccorditionItem
                            key={title}
                            title={title}
                            index={index}
                            activeIndex={accorditionActiveIndex}
                            handleToggle={handleAccorditionChange}
                        >
                            {
                                data.map(procedureToCheckboxItem)
                            }
                        </AccorditionItem>
                    ))
                }

            </Accordion>

            <Divider />

            <Form.Field label="Выбранные услуги:" />
            <Label.Group>
                {
                    formData.procedures.map(procedure => (
                        <Label
                            key={procedure.id}
                            content={
                                shouldDisplayProcedurePrice ?
                                    buildPriceString(procedure.name, procedure.priceBeforeTaxes)
                                    : procedure.name
                            }
                            onRemove={() => removeProcedure(procedure)}
                        />
                    ))
                }
            </Label.Group>

        </Form.Group>
    )
}

export default ProceduresCheckboxGroup;