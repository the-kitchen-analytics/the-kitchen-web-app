import React from "react";
import { Header } from "semantic-ui-react";
import DaySelect from "../../Common/DaySelect";

import MainTable from "../../Common/Table/Table";

const DailyTableView = ({ data, daySelectOptions, selectedDate, handleDateChange }) => {

    return (
        <div className="view">
            <Header>
                <h1>За день</h1>
            </Header>

            <DaySelect
                value={selectedDate}
                options={daySelectOptions}
                handleChange={handleDateChange}
            />

            <MainTable
                tableData={[data]}
            />
        </div>
    );
}

DailyTableView.displayName = 'DailyTableView';
export default DailyTableView;