import React from "react";
import Statistics from "../../Common/Statistics/Statistics";

const AllTimeStatisticsView = ({ data }) => (
    <div className="view">
        <Statistics
            data={data}
        />
    </div>
);

AllTimeStatisticsView.displayName = 'AllTimeStatisticsView';
export default AllTimeStatisticsView;
