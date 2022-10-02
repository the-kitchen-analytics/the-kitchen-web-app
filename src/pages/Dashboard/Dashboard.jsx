import { Outlet } from "react-router-dom";
import { Container, Grid, Loader, Segment } from 'semantic-ui-react';
import NavigationBar from "../../components/NavigationBar";
import { navigationBarOptions } from "../../data/ui/navigationBar";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { UserSettingsContextProvider } from "../../context/UserSettingsContext";
import { useStreamReceiptData } from "../../hooks";

const Dashboard = ({ user: currentUser }) => {

    const [data, isLoading, error] = useStreamReceiptData({ uid: currentUser.uid });

    const outlet = () => (
        <Outlet
            context={{
                ...data,
                currentUser,
            }}
        />
    )

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
                                            isLoading
                                                ? <Loader content="Загрузка данных" />
                                                : outlet()
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