import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import ResetPassword from './pages/ResetPassword'
import RequireAuth from './components/RequireAuth'

import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'

import { DailyTableView, MonthlyTableView, AllTimeTableView } from './pages/Tables'
import { DailyStatisticsView, MonthlyStatisticsView, AllTimeStatisticsView } from './pages/Statistics'
import Settings from './pages/Settings'
import { WithCurrentUser } from './hoc'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'

import { CREATE_PROCEDURE, CREATE_RECEIPT, EDIT_PROCEDURE, EDIT_RECEIPT, PROCEDURES, routes } from './data/routePaths'
import { ApplicationSettingsContextProvider } from './context/ApplicationSettingsContext'
import { CreateProcedure, EditProcedure, EditProcedures } from './pages/Procedure/'
import { CreateReceipt, EditReceipt } from './pages/Receipt'
import ScrollToTop from './components/ScrollToTop'
import UserProfile from './pages/UserProfile'

const DashboardWithCurrentUser = WithCurrentUser(Dashboard)

const App = () => (
  <div className="app">
    <ApplicationSettingsContextProvider>
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
                path={'profile'}
                element={<UserProfile />}
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

export default App