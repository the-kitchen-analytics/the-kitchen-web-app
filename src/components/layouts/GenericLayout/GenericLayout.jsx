import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

const GenericLayout = ({ header, subheader, icon, content, children }) => (
    <Grid stackable>
        <Grid.Row>
            <Grid.Column>
                <Header as='h2'>
                    {
                        icon && <Icon name={icon} />
                    }
                    <Header.Content>
                        {
                            header
                        }
                        {
                            subheader && <Header.Subheader>{subheader}</Header.Subheader>
                        }
                    </Header.Content>
                </Header>
            </Grid.Column>
        </Grid.Row>
        {
            content || children
        }
    </Grid>
)

export default GenericLayout