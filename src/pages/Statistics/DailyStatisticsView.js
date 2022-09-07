import React from "react";
import Statistics from "../../components/shared/Statistics";

const DailyStatisticsView = ({ data }) => (
    <div className="view">
        <Statistics
            data={data}
        />
    </div>
);

DailyStatisticsView.displayName = 'DailyStatisticsView';
export default DailyStatisticsView;