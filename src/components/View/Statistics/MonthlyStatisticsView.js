import React from "react";
import Statistics from "../../Common/Statistics/Statistics";

const MonthlyStatisticsView = ({ data }) => (
    <div className="view">
        <Statistics
            data={data}
        />
    </div>
);

MonthlyStatisticsView.displayName = 'MonthlyStatisticsView';
export default MonthlyStatisticsView;