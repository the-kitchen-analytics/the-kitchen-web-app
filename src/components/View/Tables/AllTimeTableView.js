import React from "react";
import { Header } from "semantic-ui-react";
import GenericTable from "../../Common/Table/GenericTable";

const AllTimeTableView = ({ getTableData }) => (
    <div className="view">
        <Header>
            <h1>За всё время</h1>
        </Header>
        <GenericTable
            tableData={getTableData()}
        />
    </div>
);

AllTimeTableView.displayName = 'AllTimeTableView';
export default AllTimeTableView;