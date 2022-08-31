import React, { useState, useMemo, useEffect, useCallback } from "react";
import _ from "lodash";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";

import { GenericView } from "../Common/View";
import NoContentView from "./NoContentView";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "./Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "./Statistics";
import MainMenu from "../Common/MainMenu/MainMenu";
import DaySelect from "../Common/DaySelect";
import MonthSelect from "../Common/MonthSelect";
import SettingsView from "./Settings/SettingsView";

import { groupByKey } from "../../utils/ArrayUtil";
import { getCurrentMonth } from "../../utils/DateUtils";
import { withDailyDataView, withMonthlyDataView, withAllDataView } from "../../HOC";

const MainView = ({ data, refreshData }) => {

    const [groupedData, setGroupedData] = useState({})
    const [workedDays, setWorkedDays] = useState([])
    const [activeViewName, setActiveViewName] = useState(DailyTableView.displayName)
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth())

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

        return result ? Object.values(groupByKey(result, 'dateFormatted')) : result;
    }, [data, selectedMonth]);

    const daySelectOptions = useMemo(() => workedDays.map(day => ({
        key: day,
        text: day,
        value: day
    })), [workedDays]);

    const monthSelectOptions = useMemo(() => ([
        {
            key: 0,
            text: 'Январь',
            value: 1
        },
        {
            key: 1,
            text: 'Февраль',
            value: 2
        },
        {
            key: 2,
            text: 'Март',
            value: 3
        },
        {
            key: 3,
            text: 'Апрель',
            value: 4
        },
        {
            key: 4,
            text: 'Май',
            value: 5
        },
        {
            key: 5,
            text: 'Июнь',
            value: 6
        },
        {
            key: 6,
            text: 'Июль',
            value: 7
        },
        {
            key: 7,
            text: 'Август',
            value: 8
        },
        {
            key: 8,
            text: 'Сентябрь',
            value: 9
        },
        {
            key: 9,
            text: 'Октябрь',
            value: 10
        },
        {
            key: 10,
            text: 'Ноябрь',
            value: 11
        },
        {
            key: 11,
            text: 'Декабрь',
            value: 12
        }
    ]), [])

    const handleActiviItemChange = useCallback((e, { name }) => setActiveViewName(name), []);

    const getDaySelectElement = useCallback(() => (
        <DaySelect
            value={selectedDay}
            options={daySelectOptions}
            handleChange={(e, { value }) => setSelectedDay(value)}
        />
    ), [selectedDay, daySelectOptions])

    const getMonthSelectElement = useCallback(() => (
        <MonthSelect
            value={selectedMonth}
            options={monthSelectOptions}
            handleChange={(e, { value }) => setSelectedMonth(value)}
        />
    ), [selectedMonth, monthSelectOptions])

    const getContent = useCallback(() => {
        switch (activeViewName) {
            case DailyTableView.displayName:
                return withDailyDataView(DailyTableView, getDataByDay, getDaySelectElement)

            case MonthlyTableView.displayName:
                return withMonthlyDataView(MonthlyTableView, getDataByMonth, getMonthSelectElement)

            case AllTimeTableView.displayName:
                return withAllDataView(AllTimeTableView, getAllData)

            case DailyStatisticsView.displayName:
                return withDailyDataView(DailyStatisticsView, getDataByDay, getDaySelectElement)

            case MonthlyStatisticsView.displayName:
                return withMonthlyDataView(MonthlyStatisticsView, getDataByMonth, getMonthSelectElement)

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
    }, [activeViewName, getDataByDay, getDaySelectElement, getDataByMonth, getMonthSelectElement, getAllData]);

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