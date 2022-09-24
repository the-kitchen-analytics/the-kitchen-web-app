import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/Reset'
import RequireAuth from './components/RequireAuth';

import NoContent from './pages/NoContent';

import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

import { DailyTableView, MonthlyTableView, AllTimeTableView } from "./pages/Tables";
import { DailyStatisticsView, MonthlyStatisticsView, AllTimeStatisticsView } from "./pages/Statistics";
import Settings from "./pages/Settings";
import SubmitData from "./pages/SubmitData";

import { DASHBOARD, routes, TABLE_DAILY } from './data/routePaths';

const App = () => (
    <div className="app">
        <Router basename='the-kitchen-analytics-react-app'>
            <Routes>
                <Route index element={<Navigate to={`${DASHBOARD}/${TABLE_DAILY}`} />} />

                <Route path={routes.LOGIN} element={<Login />} />
                <Route path={routes.REGISTER} element={<Register />} />
                <Route
                    path={routes.RESET_PASSWORD}
                    element={
                        <RequireAuth>
                            <ResetPassword />
                        </RequireAuth>
                    }
                />

                <Route
                    path={routes.DASHBOARD}
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                    errorElement={<ErrorPage />}
                >
                    <Route path='table'>
                        <Route
                            index
                            element={<AllTimeTableView />}
                        />
                        <Route
                            path={'daily'}
                            element={<DailyTableView />}
                        />
                        <Route
                            path={'monthly'}
                            element={<MonthlyTableView />}
                        />
                    </Route>

                    <Route path='statistics'>
                        <Route
                            index
                            element={<AllTimeStatisticsView />}
                        />
                        <Route
                            path={'daily'}
                            element={<DailyStatisticsView />}
                        />
                        <Route
                            path={'monthly'}
                            element={<MonthlyStatisticsView />}
                        />
                    </Route>

                    <Route
                        path={'submitData'}
                        element={<SubmitData />}
                    />
                    <Route
                        path={'settings'}
                        element={<Settings />}
                    />
                </Route>
                <Route path="*" element={<NoContent />} />
            </Routes>
        </Router>
    </div>
)

export default App;