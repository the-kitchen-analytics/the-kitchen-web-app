import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount';
import ResetPassword from './pages/ResetPassword';
import RequireAuth from './components/RequireAuth';

import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

import { DailyTableView, MonthlyTableView, AllTimeTableView } from "./pages/Tables";
import { DailyStatisticsView, MonthlyStatisticsView, AllTimeStatisticsView } from "./pages/Statistics";
import Settings from "./pages/Settings";
import SubmitData from "./pages/SubmitData";
import { WithCurrentUser } from "./hoc";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

import { routes } from './data/routePaths';
import { ApplicationSettingsContextProvider } from "./context/ApplicationSettingsContext";
import EditProcedures from "./pages/Procedure/EditProcedures";
import EditProcedure from "./pages/Procedure/EditProcedure";
import { ReceiptEdit } from "./pages/Receipt";
import ScrollToTop from "./components/ScrollToTop";

const DashboardWithCurrentUser = WithCurrentUser(Dashboard);

const App = () => (
    <div className="app">
        <ApplicationSettingsContextProvider>
            <Router>
                <ScrollToTop>
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

                            <Route
                                path={'procedures'}
                                element={<EditProcedures />}
                            />

                            <Route
                                path={'procedures/:id'}
                                element={<EditProcedure />}
                            />

                            <Route
                                path={'receipts/:id'}
                                element={<ReceiptEdit />}
                            />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </ScrollToTop>
            </Router>
            <Footer />
        </ApplicationSettingsContextProvider>
    </div>
)

export default App;