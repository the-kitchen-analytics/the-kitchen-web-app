import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth } from './components/RequireAuth'
import { Footer } from './components/shared'

import {
  CreateAccountPage,
  ErrorPage,
  InfoPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  EditReceiptPage,
  CreateReceiptPage,
  ResetPasswordPage,
  SettingsPage,
  TablePage,
  StatisticsPage
} from './pages'

import {
  CREATE_RECEIPT, DASHBOARD,
  EDIT_RECEIPT,
  INFO, LOGIN, REGISTER, RESET_PASSWORD,
  SETTINGS,
  STATISTICS,
  TABLE,
} from './data/routePaths'

import { UserSettingsContextProvider } from './context'
import './App.css'

export const App = () => (
  <div className="app">
    <UserSettingsContextProvider>
      <Router>
        <Routes>
          <Route index element={<Navigate to={TABLE} />} />

          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={REGISTER} element={<CreateAccountPage />} />
          <Route path={RESET_PASSWORD} element={<ResetPasswordPage />} />

          <Route element={<RequireAuth />}>
            <Route
              path={DASHBOARD}
              element={<MainPage />}
              errorElement={<ErrorPage />}
            >
              <Route
                path={TABLE}
                element={<TablePage />}
              />

              <Route
                path={STATISTICS}
                element={<StatisticsPage />}
              />

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