import React from 'react';
import './App.css';
import useGoogleSheets from 'use-google-sheets';
import buildServiceData from '../../services/buildData.ts';
import DefaultView from '../View';

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

    return (
        <div className="App">
            <DefaultView tableData={tableData} />
        </div>
    );
};

export default App;