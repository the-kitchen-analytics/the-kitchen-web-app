import { Label, List } from "semantic-ui-react";
import { Price } from "../ui";
import { Link } from "react-router-dom";
import { useUserSettings } from "../../hooks";


const ListItem = (props) => {

    const { settings: { accentColor } } = useUserSettings();
    const {
        linkTo,
        shouldDisplayProcedurePriceInTable,
        procedure: {
            name,
            priceBeforeTaxes,
            priceAfterTaxes,
        },
    } = props;

    return (
        <List.Item>
            <List.Content>
                <List.Header>
                    {
                        linkTo
                            ? <Link to={linkTo}>{name}</Link>
                            : name
                    }
                </List.Header>
                {
                    shouldDisplayProcedurePriceInTable && (
                        <List.Description>
                            <Label.Group>
                                <Label>
                                    <Price euro>
                                        {priceBeforeTaxes}
                                    </Price>
                                </Label>

                                <Label color={accentColor}>
                                    <Price euro>
                                        {priceAfterTaxes}
                                    </Price>
                                </Label>
                            </Label.Group>
                        </List.Description>
                    )
                }
            </List.Content>
        </List.Item>
    );
}

const ProceduresList = ({ linkTo, procedures, listProps, shouldDisplayProcedurePriceInTable }) => (
    <List
        {...listProps}
        size="medium"
    >
        {
            procedures.map(procedure => (
                <ListItem
                    key={procedure.id || procedure.name}
                    linkTo={linkTo}
                    procedure={procedure}
                    shouldDisplayProcedurePriceInTable={shouldDisplayProcedurePriceInTable}
                />
            ))
        }
    </List>
);

export default ProceduresList;