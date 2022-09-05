import React from "react";
import { Grid, Header } from "semantic-ui-react";

const GenericView = ({ header, children }) => (
    <Grid stackable>
        <Grid.Row>
            <Grid.Column>
                <Header as="h1">
                    {
                        header
                    }
                </Header>
            </Grid.Column>
        </Grid.Row>
        {
            children || ''
        }
    </Grid>
)

export default GenericView