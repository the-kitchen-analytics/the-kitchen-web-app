import React from "react";
import Statistics from "../../components/shared/Statistics";

const MonthlyStatisticsView = ({ data }) => (
    <div className="view">
        <Statistics
            data={data}
        />
    </div>
);

MonthlyStatisticsView.displayName = 'MonthlyStatisticsView';
export default MonthlyStatisticsView;