import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import { RequireAuth } from './components/RequireAuth'
import { Footer } from './components/shared'

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
  CREATE_RECEIPT, DASHBOARD,
  EDIT_RECEIPT,
  INFO, LOGIN, REGISTER, RESET_PASSWORD,
  SETTINGS,
  STATISTICS_ALL, STATISTICS_BASE_ROUTE,
  STATISTICS_DAILY,
  STATISTICS_MONTHLY,
  TABLE_ALL, TABLE_BASE_ROUTE,
  TABLE_DAILY,
  TABLE_MONTHLY
} from './data/routePaths'

import { UserSettingsContextProvider } from './context'
import './App.css'

export const App = () => (
  <div className="app">
    <UserSettingsContextProvider>
      <Router>
        <Routes>
          <Route index element={<Navigate to={TABLE_DAILY} />} />

          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={REGISTER} element={<CreateAccountPage />} />
          <Route path={RESET_PASSWORD} element={<ResetPasswordPage />} />

          <Route element={<RequireAuth />}>
            <Route
              path={DASHBOARD}
              element={<MainPage />}
              errorElement={<ErrorPage />}
            >
              <Route path={TABLE_BASE_ROUTE}>
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

              <Route path={STATISTICS_BASE_ROUTE}>
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
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </UserSettingsContextProvider>
  </div>
)