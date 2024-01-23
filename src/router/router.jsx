import { createBrowserRouter, Navigate } from 'react-router-dom'

import {
  RECEIPT_CREATE_PATH, RECEIPT_EDIT_PATH,
  INFO_PATH, LOGIN_PATH, REGISTER_PATH, RESET_PASSWORD_PATH,
  SETTINGS_PATH, STATISTICS_PATH, TABLE_PATH
} from './routes'

import {
  CreateAccountPage, LoginPage, ResetPasswordPage,
  EditReceiptPage, CreateReceiptPage,
  SettingsPage, InfoPage,
  TablePage, StatisticsPage
} from '../pages'

import { MainLayout, RequireAuth } from '../layouts'

const NavigateToHome = () => <Navigate to={TABLE_PATH} />

export const router = createBrowserRouter([
  { index: true, element: <NavigateToHome /> },
  { path: LOGIN_PATH, element: <LoginPage /> },
  { path: REGISTER_PATH, element: <CreateAccountPage /> },
  { path: RESET_PASSWORD_PATH, element: <ResetPasswordPage /> },
  {
    element: <RequireAuth />, children: [
      {
        element: <MainLayout />, children: [
          { path: TABLE_PATH, element: <TablePage /> },
          { path: STATISTICS_PATH, element: <StatisticsPage /> },
          { path: RECEIPT_EDIT_PATH, element: <EditReceiptPage /> },
          { path: RECEIPT_CREATE_PATH, element: <CreateReceiptPage /> },
          { path: SETTINGS_PATH, element: <SettingsPage /> },
          { path: INFO_PATH, element: <InfoPage /> }
        ]
      }
    ]
  },
  { path: '*', element: <NavigateToHome /> }
])