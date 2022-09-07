import React from "react";
import MainTable from "../../components/shared/Table";

const MonthlyTableView = ({ data }) => (
    <div className="view">
        <MainTable
            tableData={data}
        />
    </div>
);

MonthlyTableView.displayName = 'MonthlyTableView';
export default MonthlyTableView;