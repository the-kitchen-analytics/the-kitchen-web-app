import { getDataByDay, getAllData, getDataByMonthAndYear } from "./receiptFilterService";

export const getAllTableData = getAllData;
export const getTableDataByDay = (...args) => [getDataByDay(...args)];
export const getTableDataByMonthAndYear = getDataByMonthAndYear;