import React, { useState } from "react";
import { Accordion, Form, Divider } from "semantic-ui-react";
import { toggleSetter } from "../../utils/ui";

const DisplayOptionsAccordition = ({ options }) => {

    const [shouldDisplayOptions, setShouldDisplayOptions] = useState(false);

    return (
        <Accordion fluid>

            <Accordion.Title
                icon='setting'
                content='Параметры'
                active={shouldDisplayOptions}
                onClick={() => toggleSetter(setShouldDisplayOptions)}
            />

            <Accordion.Content active={shouldDisplayOptions}>
                {
                    options.map(option => (
                        <Form.Field key={option.key}>
                            <Form.Checkbox
                                {...option}
                            />
                        </Form.Field>
                    ))
                }
                <Divider hidden />
            </Accordion.Content>

        </Accordion>
    );
}

export default DisplayOptionsAccordition;