import React from "react";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import NavigationBar from "../../components/shared/NavigationBar";
import { Loader } from "../../components/ui";
import { UserSettingsContextProvider } from "../../context/UserSettingsContext";
import { useTransformedData, useRoutes } from "../../hooks";

const MainView = ({ data, refreshData }) => {

    const { groupedData, workedDays, isDataTransformed } = useTransformedData(data);

    const reactRoutes = useRoutes(data, groupedData, workedDays)

    if (!isDataTransformed) {
        return <Loader text="Подготовка данных" />
    }

    return (
        <UserSettingsContextProvider>
            <Grid centered padded stackable>
                <Grid.Row>
                    <Grid.Column widescreen={4}>
                        <NavigationBar
                            refreshData={refreshData}
                        />
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        <GridRow>
                            <GridColumn>
                                <Segment padded>
                                    {
                                        reactRoutes
                                    }
                                </Segment>
                            </GridColumn>
                        </GridRow>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </UserSettingsContextProvider>
    )
}

export default MainView;