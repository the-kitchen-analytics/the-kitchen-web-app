import React from "react";
import { Container, Grid, Segment, Header, Icon } from "semantic-ui-react";
import LoginForm from "./LoginForm";

const LoginView = ({ setToken }) => {

    return (
        <Container>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column mobile={16} computer={6}>
                        <Segment padded>
                            <Header
                                as='h2'
                                icon
                                style={{
                                    width: '100%'
                                }}
                            >
                                <Icon name='user circle' />
                                Войти в приложение
                                {/* <Header.Subheader>
                                    Manage your account settings and set e-mail preferences.
                                </Header.Subheader> */}
                            </Header>

                            {/* <Divider hidden /> */}

                            <LoginForm
                                setToken={setToken}
                            />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default LoginView;