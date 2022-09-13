import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useTouched } from "../../../hooks";


const Select = ({ label, name, value, handleChange, isDisabled = false, multiple = false, options = [], isInvalid = false }) => {

    const { isTouched, handleInputChangeWrapper } = useTouched(handleChange);

    return (
        <>
            {
                label && (
                    <label>{label}</label>
                )
            }
            <Dropdown
                placeholder={label}
                fluid
                selection
                value={value}
                name={name}
                onChange={(e, value) => handleInputChangeWrapper({ target: value })}
                options={options}
                error={isInvalid && isTouched}
                multiple={multiple}
                disabled={isDisabled}
            />
        </>
    )
}

export default Select;