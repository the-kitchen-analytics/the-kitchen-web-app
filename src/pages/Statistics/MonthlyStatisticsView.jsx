import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import MonthlyDataLayout from "../../components/layouts/MonthlyDataLayout";
import Statistics from "../../components/Statistics";
import { getCurrentMonthAndYear } from "../../utils/date";

const MonthlyStatisticsView = () => {

    const [selectedDate, setSelectedDate] = useState(getCurrentMonthAndYear());
    const { getStatisticsDataByMonthAndYear } = useOutletContext();

    return (
        <MonthlyDataLayout
            icon="chart bar"
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        >
            {
                selectedDate && (
                    <Statistics
                        data={getStatisticsDataByMonthAndYear(selectedDate.month, selectedDate.year)}
                    />
                )
            }
        </MonthlyDataLayout>
    );
}

export default MonthlyStatisticsView;