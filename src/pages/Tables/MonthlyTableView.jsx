import { useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import DataTable from "../../components/DataTable";
import MonthlyDataLayout from "../../components/layouts/MonthlyDataLayout";
import { getTableDataByMonthAndYear } from "../../services/tableDataFilterService";

import { getCurrentMonthAndYear } from "../../utils/date";

const MonthlyTableView = () => {

    const initialSelectedDate = useMemo(getCurrentMonthAndYear, []);
    const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
    const { receipts } = useOutletContext();

    return (
        <MonthlyDataLayout
            icon="table"
            defaultSelectedDate={initialSelectedDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        >
            <DataTable
                data={getTableDataByMonthAndYear(selectedDate.month, selectedDate.year, receipts)}
            />
        </MonthlyDataLayout>
    );
}

export default MonthlyTableView;