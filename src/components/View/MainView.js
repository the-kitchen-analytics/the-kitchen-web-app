import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Grid } from "semantic-ui-react";

import NoContentView from "./NoContentView";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "./Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "./Statistics";

import { getCurrentMonth } from "../../utils/DateUtils";
import MainMenu from "../Common/MainMenu/MainMenu";

import { groupByKey } from "../../utils/ArrayUtil";
import _ from "lodash";

const MainView = ({ data, refreshData }) => {

    const [groupedData, setGroupedData] = useState({});
    const [workedDays, setWorkedDays] = useState([]);
    const [activeViewName, setActiveViewName] = useState(DailyTableView.displayName);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedMonth] = useState(getCurrentMonth());

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
    const handleDateChange = useCallback((e, { value }) => setSelectedDay(value), []);

    const getContent = useCallback(() => {
        switch (activeViewName) {
            case DailyTableView.displayName:
                return (
                    <DailyTableView
                        handleDateChange={handleDateChange}
                        selectedDate={selectedDay}
                        data={getDataByDay()}
                        daySelectOptions={daySelectOptions}
                    />
                );

            case MonthlyTableView.displayName:
                return (
                    <MonthlyTableView
                        data={getDataByMonth()}
                    />
                )

            case AllTimeTableView.displayName:
                return (
                    <AllTimeTableView
                        data={getAllData()}
                    />
                );

            case DailyStatisticsView.displayName:
                return (
                    <DailyStatisticsView
                        handleDateChange={handleDateChange}
                        selectedDate={selectedDay}
                        data={getDataByDay()}
                        daySelectOptions={daySelectOptions}
                    />
                );

            case MonthlyStatisticsView.displayName:
                return (
                    <MonthlyStatisticsView
                        data={getDataByMonth()}
                    />
                )

            case AllTimeStatisticsView.displayName:
                return (
                    <AllTimeStatisticsView
                        data={getAllData()}
                    />
                );

            default: return (
                <NoContentView />
            )
        }
    }, [activeViewName, selectedDay, daySelectOptions, handleDateChange, getDataByDay, getDataByMonth, getAllData]);

    return (
        <Grid centered padded stackable>
            <Grid.Row>
                <Grid.Column width={4}>
                    <MainMenu
                        activeItem={activeViewName}
                        handleActiviItemChange={handleActiviItemChange}
                        refreshData={refreshData}
                    />
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    {
                        getContent(activeViewName)
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default MainView;