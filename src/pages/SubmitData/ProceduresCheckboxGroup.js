import React, { useCallback, useMemo, Fragment } from "react";
import { Accordion, Divider, Form, Label } from "semantic-ui-react";
import AccordionItem from "./AccordionItem";
import _ from "lodash";

import proceduresData from "../../data/operations.json";
import { TYPE_MANICURE, TYPE_PEDICURE, TYPE_SPA } from "../../data/procedureTypes";
import { buildPriceString } from "../../utils/money";
import { useLocalStorage } from "../../hooks";

const ProceduresCheckboxGroup = ({ formData, setFormData, accorditionActiveIndex, setAccorditionActiveIndex }) => {

    const selectedIds = useMemo(() => formData.procedures.map(({ id }) => id), [formData.procedures]);

    const [shouldDisplayHalfPartProcedures, setShouldDisplayHalfPartProcedures] = useLocalStorage('shouldDisplayHalfPartProcedures', false);

    const [shouldDisplayProcedurePrice, setShouldDisplayProcedurePrice] = useLocalStorage('shouldDisplayProcedurePrice', false);

    const [shouldDisplaySelectedProcedures, setShouldDisplaySelectedProcedures] = useLocalStorage('shouldDisplaySelectedProcedures', false);

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
        return it => it.types.includes(type)
    }, [])

    const toggleShouldDisplayHalfPartProcedures = () => {
        setShouldDisplayHalfPartProcedures(value => !value);
    }

    const toggleShouldDisplayProcedurePrice = () => {
        setShouldDisplayProcedurePrice(value => !value);
    }

    const toggleShouldDisplaySelectedProcedures = () => {
        setShouldDisplaySelectedProcedures(value => !value);
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

    const procedureToCheckboxItem = useCallback((procedure, i) => (
        <Fragment key={procedure.id}>
            {i !== 0 && <Divider />}
            <Form.Checkbox
                style={{ width: '100%' }}
                name={procedure.name}
                label={
                    shouldDisplayProcedurePrice
                        ? buildPriceString(procedure.name, procedure.priceBeforeTaxes)
                        : procedure.name
                }
                onChange={(event, { checked }) => handleProcedureItemChange(procedure, checked)}
                checked={formData.procedures.map(({ id }) => id).includes(procedure.id)}
            />
        </Fragment>

    ), [formData, handleProcedureItemChange, shouldDisplayProcedurePrice]);

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
                <Form.Checkbox
                    label="Показывать 1/2 услуги"
                    checked={shouldDisplayHalfPartProcedures}
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

            <Form.Field>
                <Form.Checkbox
                    label="Показывать выбранные услуги"
                    checked={shouldDisplaySelectedProcedures}
                    onChange={toggleShouldDisplaySelectedProcedures}
                />
            </Form.Field>

            <Form.Field>
                <Divider hidden />

                <Accordion
                    styled
                    fluid
                >
                    {
                        accorditionItems.map(({ title, data, count }, index) => (
                            <AccordionItem
                                key={title}
                                title={title}
                                index={index}
                                activeIndex={accorditionActiveIndex}
                                handleToggle={handleAccorditionChange}
                                count={count}
                            >
                                {
                                    data.map(procedureToCheckboxItem)
                                }
                            </AccordionItem>
                        ))
                    }
                </Accordion>

                <Divider hidden />
            </Form.Field>

            {
                shouldDisplaySelectedProcedures && (
                    <>
                        <Form.Field label="Выбранные услуги:" />
                        <Label.Group>
                            {
                                formData.procedures.map(procedure => (
                                    <Label
                                        size="large"
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
                    </>
                )
            }

        </Form.Group>
    )
}

export default ProceduresCheckboxGroup;