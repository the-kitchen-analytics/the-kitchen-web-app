import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Segment, Header, Grid, Card, Image, Icon } from "semantic-ui-react";
import { auth } from "../../config/firebase";
import Logout from "../Logout/Logout";

const UserAccountSettings = () => {

    const [authState, loading, error] = useAuthState(auth);

    console.debug(authState, loading, error);

    return (
        <Segment>
            <Header
                icon="user circle"
                content="Профиль"
            />

            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={16} computer={6}>
                        <Card fluid>
                            <Image
                                src={authState.photoURL}
                                wrapped
                                ui={false}
                            />
                            <Card.Content>
                                <Card.Header>
                                    {
                                        authState.displayName
                                    }
                                </Card.Header>
                                <Card.Meta>
                                    {
                                        authState.email
                                    }
                                    <div>
                                        Последний вход: {
                                            authState.metadata.lastSignInTime
                                        }
                                    </div>

                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Logout />
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>
    )
}

export default UserAccountSettings;