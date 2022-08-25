import React from "react";
import Statistics from "../../Common/Statistics/Statistics";

const DailyStatisticsView = ({ data }) => {

    return (
        <div className="view">
            <Statistics
                data={[data]}
            />
        </div>
    );
}

DailyStatisticsView.displayName = 'DailyStatisticsView';
export default DailyStatisticsView;