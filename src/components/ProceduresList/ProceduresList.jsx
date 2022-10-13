import { List, Grid } from "semantic-ui-react";
import { getWorkerCategoryDisplayName } from "../../utils/workerCategory";
import { Price } from "../ui";

const ListItem = ({ procedure: { price, name, workerCategory } }) => (
    <List.Item>
        {/* <List.Icon name='star' size='large' verticalAlign='middle' /> */}
        <List.Content>
            <List.Header as='a'>{name}</List.Header>
            <List.Description>
                {getWorkerCategoryDisplayName(workerCategory)} |
                <Price euro>{price}</Price>
            </List.Description>
        </List.Content>
    </List.Item>
);

const ProceduresList = ({ procedires }) => {

    return (
        <Grid.Row>
            <Grid.Column>
                <List divided relaxed bulleted>
                    {
                        procedires.map(procedure => (
                            <ListItem
                                key={procedure.id}
                                procedure={procedure}
                            />
                        ))
                    }
                </List>
            </Grid.Column>
        </Grid.Row>
    );
}

export default ProceduresList;