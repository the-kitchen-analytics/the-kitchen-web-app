export const DASHBOARD = '/dashboard'

// TABLE ROUTES
export const TABLE_BASE_ROUTE = `${DASHBOARD}/table`
export const TABLE_DAILY = `${TABLE_BASE_ROUTE}/daily`
export const TABLE_MONTHLY = `${TABLE_BASE_ROUTE}/monthly`
export const TABLE_ALL = `${TABLE_BASE_ROUTE}/all`

// STATISTICS ROUTES
export const STATISTICS_BASE_ROUTE = `${DASHBOARD}/statistics`
export const STATISTICS_DAILY = `${STATISTICS_BASE_ROUTE}/daily`
export const STATISTICS_MONTHLY = `${STATISTICS_BASE_ROUTE}/monthly`
export const STATISTICS_ALL = `${STATISTICS_BASE_ROUTE}/all`

// AUTH ROUTES
export const LOGIN = '/login'
export const REGISTER = '/register'
export const RESET_PASSWORD = '/resetPassword'

// RECEIPTS
export const RECEIPTS = `${DASHBOARD}/receipts`
export const CREATE_RECEIPT = `${RECEIPTS}/create`
export const EDIT_RECEIPT = `${RECEIPTS}/:id`

// OTHER ROUTES
export const SETTINGS = `${DASHBOARD}/settings`
export const INFO = `${DASHBOARD}/info`