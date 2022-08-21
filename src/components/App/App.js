import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import useGoogleSheets from 'use-google-sheets';

import { GeneralView } from '../View';

import buildServiceData from '../../services/buildData.ts';
import { groupByKey } from '../../utils/ArrayUtil';

const App = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
        sheetsOptions: [{ id: process.env.REACT_APP_GOOGLE_SHEETS_LIST_ID }]
    });

    const [tableData, setTableData] = useState([]);
    const [groupedData, setGroupedData] = useState({});

    useEffect(() => {
        if (!loading && !error && data) {
            const tableData = buildServiceData(data)
            setTableData(tableData);
            setGroupedData(groupByKey(tableData, 'dateFormatted'));
        }

    }, [data, loading, error]);

    const getAllData = useCallback(() => Object.values(groupedData), [groupedData]);

    const getDataByDay = useCallback((day) => {
        console.debug('getDataByDay', day)

        const result = groupedData[day]

        console.debug('result', result);
        return result || [];
    }, [groupedData]);


    const getDataByMonth = useCallback((month) => {
        console.debug('getDataByMonth', month);

        const result = tableData
            .flat()
            .filter(it => it.date.getMonth() === month)

        console.debug('result', result);
        return result ? Object.values(groupByKey(tableData, 'dateFormatted')) : [];
    }, [tableData]);

    const getWorkedDays = useCallback(() => [...Object.keys(groupedData)].reverse(), [groupedData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    return (
        <div className="App">
            <GeneralView
                getAllData={getAllData}
                getDataByDay={getDataByDay}
                getDataByMonth={getDataByMonth}
                getWorkedDays={getWorkedDays}
            />
        </div>
    );
};

export default App;