import _ from "lodash";
import { useCallback } from "react";

const useDataFilters = (data, groupedData) => {
    const getAllData = useCallback(() => Object.values(groupedData), [groupedData]);

    const getDataByDay = useCallback((selectedDay) => {
        const result = groupedData[selectedDay]

        return result || [];
    }, [groupedData]);

    const getDataByMonth = useCallback((selectedMonth) => {
        const result = data
            .flat()
            .filter(it => it.date.getMonth() + 1 === selectedMonth)

        return result ? Object.values(_.groupBy(result, 'dateFormatted')) : result;
    }, [data]);

    return {
        getAllData,
        getDataByDay,
        getDataByMonth
    }
}

export default useDataFilters;

