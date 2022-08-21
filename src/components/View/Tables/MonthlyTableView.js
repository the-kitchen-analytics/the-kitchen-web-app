import React from "react";
import { Header } from "semantic-ui-react";

import MainTable from "../../Common/Table/Table";

const MonthlyTableView = ({ data }) => (
    <div className="view">
        <div className="view">
            <Header>
                <h1>За месяц</h1>
            </Header>
            <MainTable
                tableData={data}
            />
        </div>
    </div>
);

MonthlyTableView.displayName = 'MonthlyTableView';
export default MonthlyTableView;