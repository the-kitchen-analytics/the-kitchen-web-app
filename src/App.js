import React from 'react';
import ApiServiceContext from './context/ApiServiceContext';
import Dashboard from './pages/Dashboard';
import { googleSheetsService } from './services';

const App = () => {

    return (
        <div className="app">
            <ApiServiceContext.Provider value={googleSheetsService}>
                <Dashboard />
            </ApiServiceContext.Provider>
        </div>
    );
};

export default App;