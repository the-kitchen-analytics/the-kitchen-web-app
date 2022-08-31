import React from "react";
import MainTable from "../../Common/Table/Table";

const DailyTableView = ({ data }) => (
    <div className="view">
        <MainTable
            tableData={[data]}
        />
    </div>
);

DailyTableView.displayName = 'DailyTableView';
export default DailyTableView;