import React, { useMemo } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import { GenericView, DailyDataView, MonthlyDataView, AllDataView } from "../Common/View";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "./Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "./Statistics";
import MainMenu from "../Common/MainMenu/MainMenu";
import SettingsView from "./Settings/SettingsView";
import NoContentView from "./NoContentView";
import useDataFilters from "../../hooks/useDataFilters";
import useTransformedData from "../../hooks/useTransformedData";
import Loader from "../Common/Loader";
import useStatisticsFilters from "../../hooks/useStatisticsFilters";
import buildDaySelectOptions from "../../services/buildDaySelectOptions";
import useTableFilters from "../../hooks/useTableFilters";
import { AccentColorSetingContextProvider } from "../../context/accentColorSettingContext";


const MainView = ({ data, refreshData }) => {

    const { groupedData, workedDays, isDataTransformed } = useTransformedData(data);

    const dataFilters = useDataFilters(data, groupedData);

    const {
        getAllTableData,
        getTableDataByMonth,
        getTableDataByDay
    } = useTableFilters(dataFilters);

    const {
        getAllStatisticsData,
        getStatisticsDataByMonth,
        getStaisticsDataByDay
    } = useStatisticsFilters(dataFilters);

    const daySelectOptions = useMemo(() => buildDaySelectOptions(workedDays), [workedDays]);

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
                            getData={getTableDataByDay}
                            component={DailyTableView}
                        />
                    ),
                },
                {
                    path: "montly",
                    element: (
                        <MonthlyDataView
                            getData={getTableDataByMonth}
                            component={MonthlyTableView}
                        />
                    )
                },
                {
                    path: '',
                    element: (
                        <AllDataView
                            getData={getAllTableData}
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
                            getData={getStaisticsDataByDay}
                            component={DailyStatisticsView}
                        />
                    )
                },
                {
                    path: "montly",
                    element: (
                        <MonthlyDataView
                            getData={getStatisticsDataByMonth}
                            component={MonthlyStatisticsView}
                        />
                    )
                },
                {
                    path: '',
                    element: (
                        <AllDataView
                            getData={getAllStatisticsData}
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
    ]), [daySelectOptions, getAllStatisticsData, getAllTableData, getStaisticsDataByDay, getStatisticsDataByMonth, getTableDataByDay, getTableDataByMonth])

    const reactRoutes = useRoutes(routes)

    if (!isDataTransformed) {
        return <Loader text="Подготовка данных" />
    }

    return (
        <AccentColorSetingContextProvider>
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
                                        reactRoutes
                                    }
                                </Segment>
                            </GridColumn>
                        </GridRow>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </AccentColorSetingContextProvider>
    )
}

export default MainView;