import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth } from './components/RequireAuth'
import { Footer } from './components/shared'
import { MainLayout } from './components/layouts'

import {
  CreateAccountPage, LoginPage, ResetPasswordPage,
  EditReceiptPage, CreateReceiptPage,
  SettingsPage, InfoPage,
  TablePage, StatisticsPage
} from './pages'

import {
  RECEIPT_CREATE_PATH, RECEIPT_EDIT_PATH,
  INFO_PATH, LOGIN_PATH, REGISTER_PATH, RESET_PASSWORD_PATH,
  SETTINGS_PATH, STATISTICS_PATH, TABLE_PATH
} from './data/routePaths'

import './App.css'

export const App = () => (
  <div className="app">
    <Router>
      <Routes>
        <Route index element={<Navigate to={TABLE_PATH} />} />

        <Route path={LOGIN_PATH} element={<LoginPage />} />
        <Route path={REGISTER_PATH} element={<CreateAccountPage />} />
        <Route path={RESET_PASSWORD_PATH} element={<ResetPasswordPage />} />

        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
            <Route
              path={TABLE_PATH}
              element={<TablePage />}
            />

            <Route
              path={STATISTICS_PATH}
              element={<StatisticsPage />}
            />

            <Route
              path={RECEIPT_EDIT_PATH}
              element={<EditReceiptPage />}
            />

            <Route
              path={RECEIPT_CREATE_PATH}
              element={<CreateReceiptPage />}
            />

            <Route
              path={SETTINGS_PATH}
              element={<SettingsPage />}
            />

            <Route
              path={INFO_PATH}
              element={<InfoPage />}
            />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to={TABLE_PATH} />} />
      </Routes>
    </Router>
    <Footer />
  </div>
)