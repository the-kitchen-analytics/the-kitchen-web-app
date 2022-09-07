import React from "react";
import MainTable from "../../components/shared/Table";

const DailyTableView = ({ data }) => (
    <div className="view">
        <MainTable
            tableData={[data]}
        />
    </div>
);

DailyTableView.displayName = 'DailyTableView';
export default DailyTableView;