import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid, Segment } from 'semantic-ui-react';
import NavigationBar from "../../components/NavigationBar";

import { navigationBarOptions } from "../../data/ui/navigationBar";
import logo from "../../assets/images/logo.svg";
import { UserSettingsContextProvider } from "../../context/UserSettingsContext";
import { useState } from "react";
import { useCallback } from "react";

const Dashboard = () => {

    // retrive data
    // transform data

    const [data, setData] = useState([]);

    const workedDays = []

    const getDataByDay = useCallback(() => {
        return data;
    }, [data])

    const getDataByMonthAndYear = useCallback(() => {
        return data;
    }, [data]);

    const getAllData = useCallback(() => {
        return data;
    }, [data])

    return (
        <UserSettingsContextProvider>
            <Container>
                <Grid centered padded stackable>
                    <Grid.Row>
                        <Grid.Column widescreen={4}>
                            <NavigationBar
                                logo={logo}
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
                                        <Outlet
                                            context={{
                                                getDataByDay,
                                                getDataByMonthAndYear,
                                                getAllData,
                                                workedDays
                                            }}
                                        />
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </UserSettingsContextProvider>
    )
}

export default Dashboard