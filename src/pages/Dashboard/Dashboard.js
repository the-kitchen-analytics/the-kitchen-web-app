import React, { useContext } from "react";
import { Container } from 'semantic-ui-react';
import MainView from "../MainView";
import { Loader } from "../../components/ui";
import { BrowserRouter } from 'react-router-dom';
import { useFetchData } from "../../hooks";
import ApiServiceContext from "../../context/ApiServiceContext";

const Dashboard = () => {

    const apiService = useContext(ApiServiceContext)
    const { data, isLoading, hasError, refresh } = useFetchData(apiService.fetchData, apiService.transformData);

    if (isLoading) {
        return (
            <Container>
                <Loader
                    content="Загрузка данных"
                />
            </Container>
        )
    }

    if (hasError) {
        return (
            <Container>
                <p>Error :(</p>
            </Container>
        )
    }

    console.debug("Render App!", isLoading, hasError, data.length)

    return (
        <Container>
            <BrowserRouter basename='the-kitchen-analytics-react-app'>
                <MainView
                    data={data}
                    refreshData={refresh}
                />
            </BrowserRouter>
        </Container>
    );

}

export default Dashboard;