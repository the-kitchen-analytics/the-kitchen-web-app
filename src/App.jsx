import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import { RequireAuth } from './components/RequireAuth'
import { Footer } from './components/shared'
import { WithCurrentUser } from './hoc'

import {
  AllTimeTablePage, DailyTablePage, MonthlyTablePage,
  AllTimeStatisticsPage, DailyStatisticsPage, MonthlyStatisticsPage,
  CreateAccountPage,
  ErrorPage,
  InfoPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  EditReceiptPage,
  CreateReceiptPage,
  ResetPasswordPage,
  SettingsPage
} from './pages'

import {
  CREATE_RECEIPT,
  EDIT_RECEIPT,
  INFO,
  routes, SETTINGS,
  STATISTICS_ALL,
  STATISTICS_DAILY,
  STATISTICS_MONTHLY,
  TABLE_ALL,
  TABLE_DAILY,
  TABLE_MONTHLY
} from './data/routePaths'

import { UserSettingsContextProvider } from './context'
import './App.css'

const MainPageWithCurrentUser = WithCurrentUser(MainPage)

export const App = () => (
  <div className="app">
    <UserSettingsContextProvider>
      <Router>
        <Routes>
          <Route index element={<Navigate to={'/dashboard/table/daily'} />} />

          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<CreateAccountPage />} />
          <Route path={routes.RESET_PASSWORD} element={<ResetPasswordPage />} />

          <Route
            path={routes.DASHBOARD}
            element={
              <RequireAuth>
                <MainPageWithCurrentUser />
              </RequireAuth>
            }
            errorElement={<ErrorPage />}
          >
            <Route path="table">
              <Route
                path={TABLE_ALL}
                element={<AllTimeTablePage />}
              />
              <Route
                path={TABLE_DAILY}
                element={<DailyTablePage />}
              />
              <Route
                path={TABLE_MONTHLY}
                element={<MonthlyTablePage />}
              />
            </Route>

            <Route path="statistics">
              <Route
                path={STATISTICS_ALL}
                element={<AllTimeStatisticsPage />}
              />
              <Route
                path={STATISTICS_DAILY}
                element={<DailyStatisticsPage />}
              />
              <Route
                path={STATISTICS_MONTHLY}
                element={<MonthlyStatisticsPage />}
              />
            </Route>

            <Route
              path={EDIT_RECEIPT}
              element={<EditReceiptPage />}
            />

            <Route
              path={CREATE_RECEIPT}
              element={<CreateReceiptPage />}
            />

            <Route
              path={SETTINGS}
              element={<SettingsPage />}
            />

            <Route
              path={INFO}
              element={<InfoPage />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </UserSettingsContextProvider>
  </div>
)