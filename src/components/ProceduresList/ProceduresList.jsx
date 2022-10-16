import { Label, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserSettings } from "../../hooks";
import { getProcedureTypeDisplayName } from "../../utils/procedures";


const ListItem = (props) => {

    const { settings: { accentColor } } = useUserSettings();
    const {
        linkTo,
        shouldDisplayProcedurePriceInTable,
        procedure: {
            name,
            type,
            priceBeforeTaxes,
            priceAfterTaxes,
        },
    } = props;

    const displayName = `${name} (${getProcedureTypeDisplayName(type)})`;

    return (
        <List.Item>
            <List.Content>
                <List.Header>
                    {
                        linkTo
                            ? <Link to={linkTo}>{displayName}</Link>
                            : displayName
                    }
                </List.Header>
                {
                    shouldDisplayProcedurePriceInTable && (
                        <List.Description>
                            <Label.Group size="small">
                                <Label
                                    pointing
                                    icon="euro"
                                    content={priceBeforeTaxes.toFixed(2)}
                                />
                                <Label
                                    icon="euro"
                                    color={accentColor}
                                    content={priceAfterTaxes.toFixed(2)}
                                />
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