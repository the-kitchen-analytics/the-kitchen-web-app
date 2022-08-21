import React, { useCallback, useEffect, useState } from 'react';
import useGoogleSheets from 'use-google-sheets';
import { Container } from 'semantic-ui-react';

import { GeneralView } from '../View';

import buildServiceData from '../../services/buildData.ts';
import { groupByKey } from '../../utils/ArrayUtil';
import Loader from '../Common/Loader';

const App = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
        sheetsOptions: [{ id: process.env.REACT_APP_GOOGLE_SHEETS_LIST_ID }]
    });

    const [tableData, setTableData] = useState([]);
    const [groupedData, setGroupedData] = useState({});
    const [workedDays, setWorkedDays] = useState([]);

    useEffect(() => {
        if (!loading && !error && data) {
            const tableData = buildServiceData(data)
            const groupedData = groupByKey(tableData, 'dateFormatted')
            setTableData(tableData);
            setGroupedData(groupedData);
            setWorkedDays([...Object.keys(groupedData)].reverse())
        }

    }, [data, loading, error]);

    const getAllData = useCallback(() => Object.values(groupedData), [groupedData]);

    const getDataByDay = useCallback((day) => {
        const result = groupedData[day]

        return result || [];
    }, [groupedData]);


    const getDataByMonth = useCallback((month) => {
        const result = tableData
            .flat()
            .filter(it => it.date.getMonth() === month)

        return result ? Object.values(groupByKey(tableData, 'dateFormatted')) : [];
    }, [tableData]);

    const getContent = useCallback(() => {
        if (loading) {
            return <Loader />;
        }

        if (error) {
            return <div>Error!</div>;
        }

        return (
            <GeneralView
                getAllData={getAllData}
                getDataByDay={getDataByDay}
                getDataByMonth={getDataByMonth}
                workedDays={workedDays}
            />
        )
    }, [loading, error, workedDays, getAllData, getDataByDay, getDataByMonth]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error!</div>;
    }

    return (
        <div className="App">
            <Container>
                {
                    getContent()
                }
            </Container>
        </div>
    );
};

export default App;