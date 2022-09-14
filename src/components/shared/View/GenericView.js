import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

const GenericView = ({ header, subheader, icon, children }) => (
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
            children || ''
        }
    </Grid>
)

export default GenericView