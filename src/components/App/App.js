import React from 'react';
import { Container } from 'semantic-ui-react';

import { MainView } from '../View';
import Loader from '../Common/Loader';
import buildServiceData from "../../services/buildData";
import useDataFetch from '../../hooks/useDataFetch';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    const { data, loading, error, refetch } = useDataFetch();

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

    const refreshData = () => {
        console.debug("Refetch data")
        refetch()
    }


    return (
        <div className="app">
            <Container>
                <BrowserRouter basename='the-kitchen-analytics-react-app'>
                    <MainView
                        data={buildServiceData(data)}
                        refreshData={refreshData}
                    />
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default App;