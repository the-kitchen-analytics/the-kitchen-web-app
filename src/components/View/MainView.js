import React, { useState, useMemo, useEffect, useCallback } from "react";
import _ from "lodash";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";

import { GenericView } from "../Common/View";
import NoContentView from "./NoContentView";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "./Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "./Statistics";
import MainMenu from "../Common/MainMenu/MainMenu";
import DaySelect from "../Common/DaySelect";
import SettingsView from "./Settings/SettingsView";

import { groupByKey } from "../../utils/ArrayUtil";
import { getCurrentMonth } from "../../utils/DateUtils";
import { withDailyDataView, withMonthlyDataView, withAllDataView } from "../../HOC"

const MainView = ({ data, refreshData }) => {

    const [groupedData, setGroupedData] = useState({})
    const [workedDays, setWorkedDays] = useState([])
    const [activeViewName, setActiveViewName] = useState(DailyTableView.displayName)
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedMonth] = useState(getCurrentMonth())

    useEffect(() => {
        if (data) {
            console.debug("MainView.useEffect()", data)
            const groupedData = groupByKey(data, 'dateFormatted')
            const workedDays = [...Object.keys(groupedData)]

            setGroupedData(groupedData)
            setWorkedDays(workedDays)

            if (!_.isEmpty(workedDays)) {
                setSelectedDay(workedDays[0])
            }
        }

    }, [data]);

    const getAllData = useCallback(() => Object.values(groupedData), [groupedData]);

    const getDataByDay = useCallback(() => {
        const result = groupedData[selectedDay]

        return result || [];
    }, [groupedData, selectedDay]);


    const getDataByMonth = useCallback(() => {
        const result = data
            .flat()
            .filter(it => it.date.getMonth() === selectedMonth)

        return result ? Object.values(groupByKey(data, 'dateFormatted')) : [];
    }, [data, selectedMonth]);

    const daySelectOptions = useMemo(() => workedDays.map(day => ({
        key: day,
        text: day,
        value: day
    })), [workedDays]);

    const handleActiviItemChange = useCallback((e, { name }) => setActiveViewName(name), []);

    const getDaySelectElement = useCallback(() => (
        <DaySelect
            value={selectedDay}
            options={daySelectOptions}
            handleChange={(e, { value }) => setSelectedDay(value)}
        />
    ), [selectedDay, daySelectOptions])

    const getContent = useCallback(() => {
        switch (activeViewName) {
            case DailyTableView.displayName:
                return withDailyDataView(DailyTableView, getDataByDay, getDaySelectElement)

            case MonthlyTableView.displayName:
                return withMonthlyDataView(MonthlyTableView, getDataByMonth)

            case AllTimeTableView.displayName:
                return withAllDataView(AllTimeTableView, getAllData)

            case DailyStatisticsView.displayName:
                return withDailyDataView(DailyStatisticsView, getDataByDay, getDaySelectElement)

            case MonthlyStatisticsView.displayName:
                return withMonthlyDataView(MonthlyStatisticsView, getDataByMonth)

            case AllTimeStatisticsView.displayName:
                return withAllDataView(AllTimeStatisticsView, getAllData)

            case SettingsView.displayName:
                return (
                    <GenericView header="Настройки">
                        <SettingsView

                        />
                    </GenericView>
                )

            default: return (
                <NoContentView />
            )
        }
    }, [activeViewName, getDaySelectElement, getDataByDay, getDataByMonth, getAllData]);

    return (
        <Grid centered padded stackable>
            <Grid.Row>
                <Grid.Column widescreen={4}>
                    <MainMenu
                        activeItem={activeViewName}
                        handleActiviItemChange={handleActiviItemChange}
                        refreshData={refreshData}
                    />
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <GridRow>
                        <GridColumn>
                            <Segment padded>
                                {
                                    getContent(activeViewName)
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