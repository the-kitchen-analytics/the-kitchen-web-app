export const DASHBOARD = '/dashboard';

// TABLE ROUTES
const TABLE_BASE_ROUTE = `${DASHBOARD}/table`;
export const TABLE_DAILY = `${TABLE_BASE_ROUTE}/daily`;
export const TABLE_MONTHLY = `${TABLE_BASE_ROUTE}/monthly`;
export const TABLE_ALL = `${TABLE_BASE_ROUTE}`;

// STATISTICS ROUTES
const STATISTICS_BASE_ROUTE = `${DASHBOARD}/statistics`;
export const STATISTICS_DAILY = `${STATISTICS_BASE_ROUTE}/daily`;
export const STATISTICS_MONTHLY = `${STATISTICS_BASE_ROUTE}/monthly`;
export const STATISTICS_ALL = `${STATISTICS_BASE_ROUTE}`;

// AUTH ROUTES
export const LOGIN = '/login';
export const REGISTER = '/register';
export const RESET_PASSWORD = '/resetPassword';

// RECEIPTS
export const RECEIPTS = `${DASHBOARD}/receipts`;
export const CREATE_RECEIPT = `${RECEIPTS}/create`;
export const EDIT_RECEIPT = `${RECEIPTS}/:id`;

// PROCEDURES
export const PROCEDURES = `${DASHBOARD}/procedures`;
export const CREATE_PROCEDURE = `${PROCEDURES}/create`;
export const EDIT_PROCEDURE = `${PROCEDURES}/:id`;

// OTHER ROUTES
export const SETTINGS = `${DASHBOARD}/settings`;
export const USER_PROFILE = `${DASHBOARD}/profile`;

export const routes = Object.freeze({
    DASHBOARD,

    // TABLE ROUTES
    TABLE_DAILY, TABLE_MONTHLY, TABLE_ALL,

    // STATISTICS ROUTES
    STATISTICS_DAILY, STATISTICS_MONTHLY, STATISTICS_ALL,

    // AUTH ROUTES
    LOGIN, REGISTER, RESET_PASSWORD,

    // RECEIPTS
    RECEIPTS, CREATE_RECEIPT, EDIT_RECEIPT,

    // PROCEDURES
    PROCEDURES, CREATE_PROCEDURE, EDIT_PROCEDURE,

    // OTHER ROUTES
    SETTINGS, USER_PROFILE
});