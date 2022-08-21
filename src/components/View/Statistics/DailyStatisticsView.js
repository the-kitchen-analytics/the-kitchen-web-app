import React from "react";
import { Header } from "semantic-ui-react";
import DaySelect from "../../Common/DaySelect";
import Statistics from "../../Common/Statistics/Statistics";

const DailyStatisticsView = ({ data, daySelectOptions, selectedDate, handleDateChange }) => {

    return (
        <div className="view">
            <Header>
                <h1>За день</h1>
            </Header>

            <DaySelect
                value={selectedDate}
                options={daySelectOptions}
                handleChange={handleDateChange}
            />

            <Statistics
                data={[data]}
            />
        </div>
    );
}

DailyStatisticsView.displayName = 'DailyStatisticsView';
export default DailyStatisticsView;