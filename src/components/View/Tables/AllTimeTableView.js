import React from "react";
import { Header } from "semantic-ui-react";
import MainTable from "../../Common/Table/Table";

const AllTimeTableView = ({ data }) => (
    <div className="view">
        <Header>
            <h1>За всё время</h1>
        </Header>
        <MainTable
            tableData={data}
        />
    </div>
);

AllTimeTableView.displayName = 'AllTimeTableView';
export default AllTimeTableView;