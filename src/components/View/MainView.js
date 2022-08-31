import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import { GenericView, DailyDataView, MonthlyDataView, AllDataView } from "../Common/View";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "./Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "./Statistics";
import MainMenu from "../Common/MainMenu/MainMenu";
import SettingsView from "./Settings/SettingsView";
import { groupByKey } from "../../utils/ArrayUtil";
import NoContentView from "./NoContentView";


const MainView = ({ data, refreshData }) => {

    const [groupedData, setGroupedData] = useState({})
    const [workedDays, setWorkedDays] = useState([])

    useEffect(() => {
        if (data) {
            console.debug("MainView.useEffect()", data)
            const groupedData = groupByKey(data, 'dateFormatted')
            const workedDays = [...Object.keys(groupedData)]

            setGroupedData(groupedData)
            setWorkedDays(workedDays)
        }

    }, [data]);

    const getAllData = useCallback(() => Object.values(groupedData), [groupedData]);

    const getDataByDay = useCallback((selectedDay) => {
        const result = groupedData[selectedDay]

        return result || [];
    }, [groupedData]);

    const getDataByMonth = useCallback((selectedMonth) => {
        const result = data
            .flat()
            .filter(it => it.date.getMonth() + 1 === selectedMonth)

        return result ? Object.values(groupByKey(result, 'dateFormatted')) : result;
    }, [data]);

    const daySelectOptions = useMemo(() => workedDays.map(day => ({
        key: day,
        text: day,
        value: day
    })), [workedDays]);

    const routes = useMemo(() => ([
        {
            path: "",
            element: <Navigate to="/table/daily" />
        },
        {
            path: "table",
            children: [
                {
                    path: "daily",
                    element: (
                        <DailyDataView
                            options={daySelectOptions}
                            getData={getDataByDay}
                            component={DailyTableView}
                        />
                    ),
                },
                {
                    path: "montly",
                    element: (
                        <MonthlyDataView
                            getData={getDataByMonth}
                            component={MonthlyTableView}
                        />
                    )
                },
                {
                    path: '',
                    element: (
                        <AllDataView
                            getData={getAllData}
                            component={AllTimeTableView}
                        />
                    )
                }
            ],
        },

        {
            path: "statistics",
            children: [
                {
                    path: "daily",
                    element: (
                        <DailyDataView
                            options={daySelectOptions}
                            getData={getDataByDay}
                            component={DailyStatisticsView}
                        />
                    )
                },
                {
                    path: "montly",
                    element: (
                        <MonthlyDataView
                            getData={getDataByMonth}
                            component={MonthlyStatisticsView}
                        />
                    )
                },
                {
                    path: '',
                    element: (
                        <AllDataView
                            getData={getAllData}
                            component={AllTimeStatisticsView}
                        />
                    )
                }
            ],
        },

        {
            path: "settings",
            element: (
                <GenericView header="Настройки">
                    <SettingsView />
                </GenericView>
            )
        },
        {
            path: '*',
            element: <NoContentView />
        }
    ]), [daySelectOptions, getAllData, getDataByDay, getDataByMonth])

    return (
        <Grid centered padded stackable>
            <Grid.Row>
                <Grid.Column widescreen={4}>
                    <MainMenu
                        refreshData={refreshData}
                    />
                </Grid.Column>

                <Grid.Column stretched width={12}>

                    <GridRow>
                        <GridColumn>
                            <Segment padded>
                                {
                                    useRoutes(routes)
                                }
                            </Segment>
                        </GridColumn>
                    </GridRow>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default MainView;