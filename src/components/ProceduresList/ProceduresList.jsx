import { List } from "semantic-ui-react";
import { Price } from "../ui";
import { Link } from "react-router-dom";


const ListItem = ({ linkTo, procedure: { name, priceBeforeTaxes } }) => (
    <List.Item>
        <List.Content>
            <List.Header>
                {
                    linkTo
                        ? <Link to={linkTo}>{name}</Link>
                        : name
                }
            </List.Header>
            <List.Description>
                <Price euro>
                    {priceBeforeTaxes}
                </Price>
            </List.Description>
        </List.Content>
    </List.Item>
)

const ProceduresList = ({ linkTo, procedures }) => {

    return (
        <List
            divided
            relaxed
            bulleted
            size="medium"
        >
            {
                procedures.map(procedure => (
                    <ListItem
                        key={procedure.id || procedure.name}
                        linkTo={linkTo}
                        procedure={procedure}
                    />
                ))
            }
        </List>
    );
}

export default ProceduresList;