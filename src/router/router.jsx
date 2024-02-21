import { createBrowserRouter, Navigate } from 'react-router-dom'

import { DEFAULT_PATH, INFO_PATH, LOGIN_PATH, REGISTER_PATH, RESET_PASSWORD_PATH, SETTINGS_PATH } from './routes'

import {
  CreateAccountPage,
  CreateReceiptPage,
  EditReceiptPage,
  InfoPage,
  LoginPage,
  ResetPasswordPage,
  SettingsPage,
  StatisticsPage,
  TablePage
} from '../pages'

import {
  MainLayout,
  ReceiptDayLayout,
  ReceiptFilterByDateLayout,
  ReceiptMonthAndYearLayout,
  ReceiptYearLayout,
  RequireAuth
} from '../layouts'

import { receiptDayLoader, receiptEditPageLoader, } from '../domain/receipt'

const NavigateToHome = () => <Navigate to={DEFAULT_PATH} />

export const router = createBrowserRouter([
  { index: true, element: <NavigateToHome /> },
  { path: LOGIN_PATH, element: <LoginPage /> },
  { path: REGISTER_PATH, element: <CreateAccountPage /> },
  { path: RESET_PASSWORD_PATH, element: <ResetPasswordPage /> },
  {
    element: <RequireAuth />, children: [
      {
        element: <MainLayout />, children: [

          {
            path: 'receipts',
            children: [
              { path: 'create', element: <CreateReceiptPage /> },
              {
                path: ':receiptId',
                element: <EditReceiptPage />,
                loader: receiptEditPageLoader
              },
              {
                element: <ReceiptFilterByDateLayout />,
                children: [
                  {
                    path: 'day',
                    element: <ReceiptDayLayout />,
                    loader: receiptDayLoader,
                    children: [
                      { path: 'table', element: <TablePage /> },
                      { path: 'statistics', element: <StatisticsPage /> },
                    ]
                  },
                  {
                    path: 'month',
                    element: <ReceiptMonthAndYearLayout />,
                    children: [
                      { path: 'table', element: <TablePage /> },
                      { path: 'statistics', element: <StatisticsPage /> },
                    ]
                  },
                  {
                    path: 'year',
                    element: <ReceiptYearLayout />,
                    children: [
                      { path: 'table', element: <TablePage /> },
                      { path: 'statistics', element: <StatisticsPage /> },
                    ]
                  },
                ]
              },
            ]
          },
          { path: SETTINGS_PATH, element: <SettingsPage /> },
          { path: INFO_PATH, element: <InfoPage /> }
        ]
      }
    ]
  }
])