import React, { useEffect, useMemo, useState } from "react";
import { Header } from "semantic-ui-react";
import DaySelect from "../../Common/DaySelect";

import GenericTable from "../../Common/Table/GenericTable";

const DailyTableView = ({ getTableData, getWorkedDays }) => {
    const workedDays = getWorkedDays();
    const [selectedDate, setSelectedDate] = useState(workedDays[0]);

    // Todo rework this shit
    useEffect(() => {
        setSelectedDate(selectedDate || workedDays[0])
    }, [selectedDate, workedDays]);

    const data = getTableData(selectedDate);

    const daySelectOptions = useMemo(() => workedDays.map(day => ({
        key: day,
        text: day,
        value: day
    })), [workedDays]);

    const handleDateChange = (e, { value }) => {
        setSelectedDate(value);
    }

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

            <GenericTable
                tableData={[data]}
            />
        </div>
    );
}

DailyTableView.displayName = 'DailyTableView';
export default DailyTableView;