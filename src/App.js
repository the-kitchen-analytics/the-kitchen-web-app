import React from 'react';
import ApiServiceContext from './context/ApiServiceContext';
import Dashboard from './pages/Dashboard';
import HealthCheck from './pages/HealthCheck';
import { apiService } from './services';

const App = () => (
    <div className="app">
        <ApiServiceContext.Provider value={apiService}>
            <HealthCheck>
                <Dashboard />
            </HealthCheck>
        </ApiServiceContext.Provider>
    </div>
);

export default App;