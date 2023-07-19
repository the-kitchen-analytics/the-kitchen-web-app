import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import ResetPassword from './pages/ResetPassword'
import RequireAuth from './components/RequireAuth'

import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'

import { AllTimeTableView, DailyTableView, MonthlyTableView } from './pages/Tables'
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from './pages/Statistics'
import Settings from './pages/Settings'
import { WithCurrentUser } from './hoc'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'

import {
  CREATE_PROCEDURE,
  CREATE_RECEIPT,
  EDIT_PROCEDURE,
  EDIT_RECEIPT,
  INFO,
  PROCEDURES,
  routes,
  STATISTICS_ALL,
  STATISTICS_DAILY,
  STATISTICS_MONTHLY,
  TABLE_ALL,
  TABLE_DAILY,
  TABLE_MONTHLY
} from './data/routePaths'
import { ApplicationSettingsContextProvider } from './context/ApplicationSettingsContext'
import { CreateProcedure, EditProcedure, EditProcedures } from './pages/Procedure/'
import { CreateReceipt, EditReceipt } from './pages/Receipt'
import ScrollToTop from './components/ScrollToTop'
import UserProfile from './pages/UserProfile'
import InfoPage from './pages/InfoPage'
import { UserSettingsContextProvider } from './context/UserSettingsContext'

const DashboardWithCurrentUser = WithCurrentUser(Dashboard)

const App = () => (
  <div className="app">
    <ApplicationSettingsContextProvider>
      <UserSettingsContextProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route index element={<Navigate to={'/dashboard/table/daily'} />} />

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
                <Route path="table">
                  <Route
                    path={TABLE_ALL}
                    element={<AllTimeTableView />}
                  />
                  <Route
                    path={TABLE_DAILY}
                    element={<DailyTableView />}
                  />
                  <Route
                    path={TABLE_MONTHLY}
                    element={<MonthlyTableView />}
                  />
                </Route>

                <Route path="statistics">
                  <Route
                    path={STATISTICS_ALL}
                    element={<AllTimeStatisticsView />}
                  />
                  <Route
                    path={STATISTICS_DAILY}
                    element={<DailyStatisticsView />}
                  />
                  <Route
                    path={STATISTICS_MONTHLY}
                    element={<MonthlyStatisticsView />}
                  />
                </Route>

                <Route
                  path={EDIT_RECEIPT}
                  element={<EditReceipt />}
                />

                <Route
                  path={CREATE_RECEIPT}
                  element={<CreateReceipt />}
                />

                <Route
                  path={PROCEDURES}
                  element={<EditProcedures />}
                />

                <Route
                  path={CREATE_PROCEDURE}
                  element={<CreateProcedure />}
                />

                <Route
                  path={EDIT_PROCEDURE}
                  element={<EditProcedure />}
                />

                <Route
                  path={'settings'}
                  element={<Settings />}
                />

                <Route
                  path={INFO}
                  element={<InfoPage />}
                />

                <Route
                  path={'profile'}
                  element={<UserProfile />}
                />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ScrollToTop>
        </Router>
        <Footer />
      </UserSettingsContextProvider>
    </ApplicationSettingsContextProvider>
  </div>
)

export default App