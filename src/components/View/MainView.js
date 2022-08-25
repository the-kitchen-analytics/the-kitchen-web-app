import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Grid, GridColumn, GridRow, Header, Segment } from "semantic-ui-react";

import NoContentView from "./NoContentView";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "./Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "./Statistics";

import { getCurrentMonth } from "../../utils/DateUtils";
import MainMenu from "../Common/MainMenu/MainMenu";
import DaySelect from "../Common/DaySelect";

import { groupByKey } from "../../utils/ArrayUtil";
import _ from "lodash";

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
                return (
                    <>
                        <Header>
                            <Grid divided>
                                <GridRow>
                                    <GridColumn>
                                        <h1>За день</h1>
                                    </GridColumn>
                                </GridRow>
                                <GridRow>
                                    <GridColumn
                                        tablet={8}
                                        largeScreen={6}
                                        widescreen={8}
                                        mobile={16}
                                    >
                                        {
                                            getDaySelectElement()
                                        }
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Header>

                        <DailyTableView
                            data={getDataByDay()}
                        />
                    </>

                );

            case MonthlyTableView.displayName:
                return (
                    <>
                        <Header>
                            <Grid divided>
                                <GridRow>
                                    <GridColumn>
                                        <h1>За месяц</h1>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Header>

                        <MonthlyTableView
                            data={getDataByMonth()}
                        />
                    </>
                )

            case AllTimeTableView.displayName:
                return (
                    <>
                        <Header>
                            <Grid divided>
                                <GridRow>
                                    <GridColumn>
                                        <h1>За всё время</h1>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Header>

                        <AllTimeTableView
                            data={getAllData()}
                        />
                    </>
                );

            case DailyStatisticsView.displayName:
                return (
                    <>
                        <Header>
                            <Grid divided>
                                <GridRow>
                                    <GridColumn>
                                        <h1>За день</h1>
                                    </GridColumn>
                                </GridRow>
                                <GridRow>
                                    <GridColumn
                                        tablet={8}
                                        largeScreen={6}
                                        widescreen={8}
                                        mobile={16}
                                    >
                                        {
                                            getDaySelectElement()
                                        }
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Header>

                        <DailyStatisticsView
                            data={getDataByDay()}
                        />
                    </>


                );

            case MonthlyStatisticsView.displayName:
                return (
                    <>
                        <Header>
                            <Grid divided>
                                <GridRow>
                                    <GridColumn>
                                        <h1>За месяц</h1>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Header>

                        <MonthlyStatisticsView
                            data={getDataByMonth()}
                        />
                    </>
                )

            case AllTimeStatisticsView.displayName:
                return (
                    <>
                        <Header>
                            <Grid divided>
                                <GridRow>
                                    <GridColumn>
                                        <h1>За всё время</h1>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Header>

                        <AllTimeStatisticsView
                            data={getAllData()}
                        />
                    </>
                );

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