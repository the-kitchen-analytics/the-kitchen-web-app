import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DailyDataLayout from "../../components/layouts/DailyDataLayout/DailyDataLayout";
import Statistics from "../../components/Statistics";

const DailyStatisticsView = () => {

    const { getStaisticsDataByDay, workedDays } = useOutletContext();
    const [selectedDay, setSelectedDay] = useState(workedDays[0])

    return (
        <DailyDataLayout
            icon="chart bar"
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            options={workedDays}
        >
            {
                selectedDay && (
                    <Statistics
                        data={getStaisticsDataByDay(selectedDay)}
                    />
                )
            }
        </DailyDataLayout>
    );
}

export default DailyStatisticsView;