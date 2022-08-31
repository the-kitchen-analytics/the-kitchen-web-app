import React from 'react';
import { Container } from 'semantic-ui-react';

import { MainView } from '../View';
import Loader from '../Common/Loader';
import buildServiceData from "../../services/buildData";
import useDataFetch from '../../hooks/useDataFetch';

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
                <MainView
                    data={buildServiceData(data)}
                    refreshData={refreshData}
                />
            </Container>
        </div>
    );
};

export default App;