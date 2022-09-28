import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DataTable from "../../components/DataTable";
import MonthlyDataLayout from "../../components/layouts/MonthlyDataLayout";

import { getCurrentMonthAndYear } from "../../utils/date";

const MonthlyTableView = () => {

    const { getTableDataByMonthAndYear } = useOutletContext();
    const [selectedDate, setSelectedDate] = useState(getCurrentMonthAndYear());

    return (
        <MonthlyDataLayout
            icon="table"
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        >
            <DataTable
                data={getTableDataByMonthAndYear(selectedDate.month, selectedDate.year)}
            />
        </MonthlyDataLayout>
    );
}

export default MonthlyTableView;