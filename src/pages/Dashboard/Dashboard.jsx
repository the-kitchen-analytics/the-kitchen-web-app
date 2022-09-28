import { Outlet } from "react-router-dom";
import { Container, Grid, Segment } from 'semantic-ui-react';
import NavigationBar from "../../components/NavigationBar";

import { navigationBarOptions } from "../../data/ui/navigationBar";
import logo from "../../assets/images/logo.svg";
import { UserSettingsContextProvider } from "../../context/UserSettingsContext";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { streamReceiptsByUid } from "../../services/receiptService";
import _ from "lodash";
import { formatDate } from "../../utils/date";
import { useDataFilters, useStatisticsFilters, useTableFilters } from "../../hooks";

const Dashboard = ({ user: currentUser }) => {

    const [data, setData] = useState([]);
    const [groupedData, setGroupedData] = useState({});
    const [workedDays, setWorkedDays] = useState([]);

    const dataFilters = useDataFilters(data, groupedData);

    const {
        getAllTableData,
        getTableDataByDay,
        getTableDataByMonthAndYear,
    } = useTableFilters(dataFilters);

    const {
        getAllStatisticsData,
        getStatisticsDataByMonthAndYear: getStatisticsDataByMonthAndYear,
        getStaisticsDataByDay,
    } = useStatisticsFilters(dataFilters);

    const convertFirebaseData = useCallback((firebaseDataEntry) => {
        const entryData = firebaseDataEntry.data()
        return {
            ...entryData,
            dateCreated: entryData.dateCreated.toDate(),
            date: entryData.date.toDate(),
            dateFormatted: formatDate(entryData.date.toDate()),
        }
    }, []);

    useEffect(() => {
        const unsubscribe = streamReceiptsByUid(currentUser.uid,
            (querySnapshot) => {
                const receipts = querySnapshot.docs.map(convertFirebaseData);

                setData(receipts);
                const receiptsByDay = _.groupBy(receipts, 'dateFormatted');
                setGroupedData(receiptsByDay);
                setWorkedDays(Object.keys(receiptsByDay));
            },
            (error) => console.error(error),
        );
        return unsubscribe;
    }, [convertFirebaseData, currentUser.uid, setData]);

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
                                                getAllTableData,
                                                getTableDataByDay,
                                                getTableDataByMonthAndYear,
                                                getAllStatisticsData,
                                                getStatisticsDataByMonthAndYear,
                                                getStaisticsDataByDay,
                                                workedDays,
                                                currentUser,
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