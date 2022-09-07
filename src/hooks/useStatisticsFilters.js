import { useCallback } from "react";
import { buildStatisticsData } from "../utils/statistics";

const useStatisticsFilters = ({ getAllData, getDataByDay, getDataByMonth }) => {

    const getAllStatisticsData = useCallback(() => buildStatisticsData(getAllData()), [getAllData])

    const getStatisticsDataByMonth = useCallback((month) =>
        buildStatisticsData(getDataByMonth(month)), [getDataByMonth])

    const getStaisticsDataByDay = useCallback((day) =>
        buildStatisticsData(getDataByDay(day)), [getDataByDay])

    return {
        getAllStatisticsData,
        getStatisticsDataByMonth,
        getStaisticsDataByDay
    }
}

export default useStatisticsFilters;