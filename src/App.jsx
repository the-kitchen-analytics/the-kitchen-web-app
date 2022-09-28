import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount';
import ResetPassword from './pages/ResetPassword';
import RequireAuth from './components/RequireAuth';

import NoContent from './pages/NoContent';

import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

import { DailyTableView, MonthlyTableView, AllTimeTableView } from "./pages/Tables";
import { DailyStatisticsView, MonthlyStatisticsView, AllTimeStatisticsView } from "./pages/Statistics";
import Settings from "./pages/Settings";
import SubmitData from "./pages/SubmitData";

import { routes } from './data/routePaths';
import { ApplicationSettingsContextProvider } from "./context/ApplicationSettingsContext";
import WithCurrentUser from "./hoc/WithCurrentUser";

const DashboardWithCurrentUser = WithCurrentUser(Dashboard);

const App = () => (
    <div className="app">
        <ApplicationSettingsContextProvider>
            <Router>
                <Routes>
                    <Route index element={<Navigate to={`/dashboard/table/daily`} />} />

                    <Route path={routes.LOGIN} element={<Login />} />
                    <Route path={routes.REGISTER} element={<CreateAccount />} />
                    <Route path={routes.RESET_PASSWORD} element={<ResetPassword />} />

                    <Route
                        path={routes.DASHBOARD}
                        element={
                            <RequireAuth>
                                <DashboardWithCurrentUser />
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
        </ApplicationSettingsContextProvider>
    </div>
)

export default App;