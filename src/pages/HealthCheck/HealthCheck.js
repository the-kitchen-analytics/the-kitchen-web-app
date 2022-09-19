import React from "react";
import { Container, Grid, Message, Segment } from "semantic-ui-react";
import { Loader } from "../../components/ui";
import { LoadableButton } from "../../components/ui/Button";
import { useHealthCheck } from "../../hooks";

const HealthCheck = ({ children }) => {

    const { isLoading, isSuccess, error, refresh } = useHealthCheck();

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
                                <LoadableButton
                                    fluid
                                    primary
                                    icon="sync alternate"
                                    content="Перезагрузить"
                                    size="large"
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