import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Container, Grid } from "semantic-ui-react";

import NoContentView from "./NoContentView";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "./Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "./Statistics";

import { getCurrentMonth } from "../../utils/DateUtils.ts";
import MainMenu from "../Common/MainMenu/MainMenu";

const GeneralView = ({ getAllData, getDataByDay, getDataByMonth, workedDays }) => {

    const [activeItem, setActiveItem] = useState(DailyTableView.displayName);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedMonth] = useState(getCurrentMonth());

    useEffect(() => {
        if (Array.isArray(workedDays) && workedDays.length > 0) {
            setSelectedDay(workedDays[0]);
        }
    }, [workedDays])

    const daySelectOptions = useMemo(() => workedDays.map(day => ({
        key: day,
        text: day,
        value: day
    })), [workedDays]);

    const handleActiviItemChange = useCallback((e, { name }) => setActiveItem(name), []);
    const handleDateChange = useCallback((e, { value }) => setSelectedDay(value), []);

    const getMonthlyData = useCallback(() => getDataByMonth(selectedMonth), [getDataByMonth, selectedMonth]);

    const getContent = useCallback(() => {
        switch (activeItem) {
            case DailyTableView.displayName:
                return (
                    <DailyTableView
                        handleDateChange={handleDateChange}
                        selectedDate={selectedDay}
                        data={getDataByDay(selectedDay)}
                        daySelectOptions={daySelectOptions}
                    />
                );

            case MonthlyTableView.displayName:
                return (
                    <MonthlyTableView
                        data={getMonthlyData()}
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
                        data={getDataByDay(selectedDay)}
                        daySelectOptions={daySelectOptions}
                    />
                );

            case MonthlyStatisticsView.displayName:
                return (
                    <MonthlyStatisticsView
                        data={getMonthlyData()}
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
    }, [
        activeItem,
        selectedDay,
        daySelectOptions,
        handleDateChange,
        getDataByDay,
        getMonthlyData,
        getAllData,
    ]);

    return (
        <Grid centered padded stackable>
            <Grid.Row>
                <Grid.Column width={4}>
                    <MainMenu
                        activeItem={activeItem}
                        handleActiviItemChange={handleActiviItemChange}
                    />
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    {
                        getContent(activeItem)
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default GeneralView;