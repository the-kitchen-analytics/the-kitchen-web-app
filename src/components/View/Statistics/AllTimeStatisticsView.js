import React from "react";
import { Header } from "semantic-ui-react";
import Statistics from "../../Common/Statistics/Statistics";

const AllTimeStatisticsView = ({ data }) => (
    <div className="view">
        <Header>
            <h1>За всё время</h1>
        </Header>

        <Statistics
            data={data}
        />
    </div>
);

AllTimeStatisticsView.displayName = 'AllTimeStatisticsView';
export default AllTimeStatisticsView;
