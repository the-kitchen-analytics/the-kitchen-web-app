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
  CREATE_RECEIPT, EDIT_RECEIPT,
  INFO, LOGIN, REGISTER, RESET_PASSWORD,
  SETTINGS, STATISTICS, TABLE
} from './data/routePaths'

import './App.css'

export const App = () => (
  <div className="app">
    <Router>
      <Routes>
        <Route index element={<Navigate to={TABLE} />} />

        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<CreateAccountPage />} />
        <Route path={RESET_PASSWORD} element={<ResetPasswordPage />} />

        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
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

        <Route path="*" element={<Navigate to={TABLE} />} />
      </Routes>
    </Router>
    <Footer />
  </div>
)