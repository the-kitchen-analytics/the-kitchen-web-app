import React from "react";
import { Button, Container, Grid, Message, Segment } from "semantic-ui-react";
import { Loader } from "../../components/ui";
import { useHealthCheck } from "../../hooks";

const healthCheckUrl = `${process.env.REACT_APP_API_URL}/info `;

const HealthCheck = ({ children }) => {

    const { isLoading, isSuccess, error, refresh } = useHealthCheck(healthCheckUrl);

    if (isSuccess) {
        return (
            <>
                {
                    children
                }
            </>
        )
    }

    if (error) {
        return (
            <Container>
                <Segment padded>
                    <Grid centered>
                        <Grid.Row>
                            <Grid.Column>
                                <Message
                                    size="large"
                                    negative
                                    icon="server"
                                    header="Ошибка!"
                                    content="При попытке подключения к серверу произошла ошибка."
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column
                                mobile={16}
                                computer={4}
                            >
                                <Button
                                    fluid
                                    primary
                                    icon="sync alternate"
                                    content="Перезагрузить"
                                    size="large"
                                    disabled={isLoading}
                                    loading={isLoading}
                                    onClick={refresh}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
        )
    }

    if (isLoading) {
        return (
            <Container>
                <Loader
                    indeterminate
                    content="Подключение к серверу"
                />
            </Container>
        )
    }
}

export default HealthCheck