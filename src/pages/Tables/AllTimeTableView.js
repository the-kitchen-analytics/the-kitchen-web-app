import React from "react";
import MainTable from "../../components/shared/Table";

const AllTimeTableView = ({ data }) => (
    <div className="view">
        <MainTable
            tableData={data}
        />
    </div>
);

AllTimeTableView.displayName = 'AllTimeTableView';
export default AllTimeTableView;