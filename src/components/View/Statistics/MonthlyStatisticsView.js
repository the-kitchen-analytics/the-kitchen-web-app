import React from "react";
import { Header } from "semantic-ui-react";
import Statistics from "../../Common/Statistics/Statistics";

const MonthlyStatisticsView = ({ data }) => (
    <div className="view">
        <Header>
            <h1>За месяц</h1>
        </Header>

        <Statistics
            data={data}
        />
    </div>
);

MonthlyStatisticsView.displayName = 'MonthlyStatisticsView';
export default MonthlyStatisticsView;