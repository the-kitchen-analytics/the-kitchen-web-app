import React from "react";
import { Grid, Header } from "semantic-ui-react";

const GenericView = ({ header, children }) => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Header as="h1">
                    {
                        header
                    }
                </Header>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                {
                    children || ''
                }
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default GenericView