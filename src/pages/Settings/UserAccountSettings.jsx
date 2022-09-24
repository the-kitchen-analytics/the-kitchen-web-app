import React from "react";
import { Segment, Header, Grid } from "semantic-ui-react";
import Logout from "../Logout/Logout";

const UserAccountSettings = () => {

    return (
        <Segment>
            <Header
                icon="user circle"
                content="Профиль"
            />

            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={16} computer={4}>
                        <Logout />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>
    )
}

export default UserAccountSettings;