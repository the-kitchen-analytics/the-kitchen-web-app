import { useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";

const useDailyData = (getData) => {
    const { receiptsByDay, workedDays } = useOutletContext();
    const [selectedDay, setSelectedDay] = useState(workedDays[0]);

    const filteredData = useMemo(() => {
        if (!receiptsByDay || !selectedDay) {
            return [];
        }

        return getData(selectedDay, receiptsByDay)
    }, [getData, receiptsByDay, selectedDay]);

    return [
        filteredData,
        workedDays,
        selectedDay,
        setSelectedDay,
    ];
}

export default useDailyData;