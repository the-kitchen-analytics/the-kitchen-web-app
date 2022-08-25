import React from "react";
import MainTable from "../../Common/Table/Table";

const AllTimeTableView = ({ data }) => (
    <div className="view">
        <MainTable
            tableData={data}
        />
    </div>
);

AllTimeTableView.displayName = 'AllTimeTableView';
export default AllTimeTableView;