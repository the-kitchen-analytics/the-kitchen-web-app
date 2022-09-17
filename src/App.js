import React from 'react';
import ApiServiceContext from './context/ApiServiceContext';
import Dashboard from './pages/Dashboard';
import HealthCheck from './pages/HealthCheck';
import { googleSheetsService } from './services';

const App = () => {

    return (
        <div className="app">
            <ApiServiceContext.Provider value={googleSheetsService}>
                <HealthCheck>
                    <Dashboard />
                </HealthCheck>
            </ApiServiceContext.Provider>
        </div>
    );
};

export default App;