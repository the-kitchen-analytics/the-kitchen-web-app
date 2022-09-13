import React from "react";
import { Accordion, Icon } from "semantic-ui-react";

const AccorditionItem = ({ title, index, activeIndex, handleToggle, children }) => {

    const isActive = index === activeIndex

    return (
        <>
            <Accordion.Title
                active={isActive}
                index={index}
                onClick={handleToggle}
            >
                <Icon name='dropdown' />
                {title}
            </Accordion.Title>

            <Accordion.Content active={isActive}>
                {
                    children
                }
            </Accordion.Content>
        </>
    )
}

export default AccorditionItem;