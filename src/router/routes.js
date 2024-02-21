export const HOME_PATH = '/'

// RECEIPTS
export const RECEIPT_PATH = '/receipts'
export const RECEIPT_CREATE_PATH = `${RECEIPT_PATH}/create`

// TABLE ROUTES
const TABLE_PATH = '/table'

// STATISTICS ROUTES
const STATISTICS_PATH = '/statistics'


// DAY ROUTES
const DAY_PART = RECEIPT_PATH + '/day'
export const TABLE_DAY_PATH = DAY_PART + TABLE_PATH
export const STATISTICS_DAY_PATH = DAY_PART + STATISTICS_PATH

// AUTH ROUTES
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const RESET_PASSWORD_PATH = '/resetPassword'

// OTHER ROUTES
export const SETTINGS_PATH = '/settings'
export const INFO_PATH = '/info'

export const DEFAULT_PATH = TABLE_DAY_PATH