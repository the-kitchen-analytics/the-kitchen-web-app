import React from 'react';
import './App.css';
import useGoogleSheets from 'use-google-sheets';
import buildServiceData from '../../services/buildData.ts';
import DefaultView from '../View';
import { groupByKey } from '../../utils/ArrayUtil';

const App = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
        sheetsOptions: [{ id: process.env.REACT_APP_GOOGLE_SHEETS_LIST_ID }]
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    const tableData = buildServiceData(data);
    const groupedData = groupByKey(tableData, 'date');

    return (
        <div className="App">
            <DefaultView
                groupedData={groupedData}
            />
        </div>
    );
};

export default App;