import React from "react";
import { Header } from "semantic-ui-react";

import GenericTable from "../../Common/Table/GenericTable";

const MonthlyTableView = ({ getTableData }) => {

    const data = getTableData(new Date().getMonth());
    console.debug('MonthlyTableView:', data);

    return (
        <div className="view">
            <div className="view">
                <Header>
                    <h1>За месяц</h1>
                </Header>
                <GenericTable
                    tableData={data}
                />
            </div>
        </div>
    );
}

MonthlyTableView.displayName = 'MonthlyTableView';
export default MonthlyTableView;