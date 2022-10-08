import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid, Segment } from 'semantic-ui-react';
import NavigationBar from "../../components/NavigationBar";
import { Loader, ErrorMessage } from "../../components/ui";
import { UserSettingsContextProvider } from "../../context/UserSettingsContext";
import { useStreamReceiptData, useUserDetails } from "../../hooks";
import { navigationBarOptions } from "../../data/ui/navigationBar";

const Dashboard = ({ user: currentUser }) => {

    const [data, isLoading, error] = useStreamReceiptData({ uid: currentUser.uid });

    const {
        userDetails,
        updateUserDetails,
        isLoading: isUserDetailsLoading
    } = useUserDetails(currentUser.uid);

    const outlet = useMemo(() => {
        if (isLoading) {
            return (
                <Container style={{ minHeight: '50vh' }}>
                    <Loader content="Загрузка данных" />
                </Container>
            )
        }

        if (isUserDetailsLoading) {
            return (
                <Container style={{ minHeight: '50vh' }}>
                    <Loader content="Загрузка данных о пользователе" />
                </Container>
            )
        }

        return (
            <Outlet
                context={{
                    ...data,
                    userDetails,
                    isUserDetailsLoading,
                    updateUserDetails,
                }}
            />
        )
    }, [isLoading, isUserDetailsLoading, data, userDetails, updateUserDetails])

    return (
        <UserSettingsContextProvider>
            <Container>
                <Grid centered padded stackable>
                    {
                        error && <ErrorMessage message={error} />
                    }
                    <Grid.Row>
                        <Grid.Column widescreen={4}>
                            <NavigationBar
                                title={(
                                    <strong>The Kitchen App</strong>
                                )}
                                options={navigationBarOptions}
                            />
                        </Grid.Column>

                        <Grid.Column stretched width={12}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment padded>
                                        {
                                            outlet
                                        }
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </UserSettingsContextProvider>
    );
}

export default Dashboard;