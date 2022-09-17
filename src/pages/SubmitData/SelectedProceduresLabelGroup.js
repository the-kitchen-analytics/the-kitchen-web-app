import React, { useCallback } from "react";
import { Form, Label } from "semantic-ui-react";
import { buildPriceString } from "../../utils/money";

const SelectedProceduresLabelGroup = ({ shouldDisplayProcedurePrice, procedures, handleRemove }) => {

    const renderContent = useCallback((procedure) => {
        if (shouldDisplayProcedurePrice) {
            return buildPriceString(procedure.name, procedure.priceBeforeTaxes)
        } else {
            return procedure.name
        }
    }, [shouldDisplayProcedurePrice])

    return (
        <>
            <Form.Field label="Выбранные услуги:" />
            <Label.Group>
                {
                    procedures.map(procedure => (
                        <Label
                            size="large"
                            key={procedure.id}
                            content={renderContent(procedure)}
                            onRemove={() => handleRemove(procedure)}
                        />
                    ))
                }
            </Label.Group>
        </>
    )
}

export default SelectedProceduresLabelGroup;