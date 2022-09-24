import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DailyDataLayout from "../../components/layouts/DailyDataLayout/DailyDataLayout";
import Statistics from "../../components/Statistics";

const DailyStatisticsView = () => {

    const { getDataByDay, workedDays } = useOutletContext();
    const [selectedDay, setSelectedDay] = useState('')

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
                        data={getDataByDay(selectedDay)}
                    />
                )
            }
        </DailyDataLayout>
    );
}

export default DailyStatisticsView;