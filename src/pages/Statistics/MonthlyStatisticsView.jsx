import { useMemo } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import MonthlyDataLayout from "../../components/layouts/MonthlyDataLayout";
import Statistics from "../../components/Statistics";
import { getStatisticsDataByMonthAndYear } from "../../services/statisticsDataFilterService";
import { getCurrentMonthAndYear } from "../../utils/date";

const MonthlyStatisticsView = () => {

    const initialSelectedDate = useMemo(getCurrentMonthAndYear, []);
    const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
    const { receipts } = useOutletContext();

    return (
        <MonthlyDataLayout
            icon="chart bar"
            defaultSelectedDate={initialSelectedDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        >
            {
                selectedDate && (
                    <Statistics
                        data={getStatisticsDataByMonthAndYear(selectedDate.month, selectedDate.year, receipts)}
                    />
                )
            }
        </MonthlyDataLayout>
    );
}

export default MonthlyStatisticsView;