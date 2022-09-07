import React from "react";
import { Container } from 'semantic-ui-react';
import MainView from "../MainView";
import { Loader } from "../../components/ui";
import { useGoogleSheetDataFetch } from "../../hooks";
import { BrowserRouter } from 'react-router-dom';
import { parseGoogleSheetData } from "../../utils/googleSheets";

const Dashboard = () => {

    const { data, loading, error, refetch } = useGoogleSheetDataFetch();

    if (loading) {
        return (
            <Container>
                <Loader />
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                <p>Error :(</p>
            </Container>
        )
    }

    console.debug("Render App!", loading, error, data)

    const answers = data.find(list => list.id === process.env.REACT_APP_GOOGLE_SHEETS_LIST_ID).data
    console.debug('answers', answers)

    return (
        <div className="app">
            <Container>
                <BrowserRouter basename='the-kitchen-analytics-react-app'>
                    <MainView
                        data={parseGoogleSheetData(answers)}
                        refreshData={refetch}
                    />
                </BrowserRouter>
            </Container>
        </div>
    );

}

export default Dashboard;