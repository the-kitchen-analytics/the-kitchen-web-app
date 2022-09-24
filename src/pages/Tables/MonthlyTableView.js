import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DataTable from "../../components/DataTable";
import MonthlyDataLayout from "../../components/layouts/MonthlyDataLayout";

import { getCurrentMonthAndYear } from "../../utils/date";

const MonthlyTableView = () => {

    const { getDataByMonthAndYear } = useOutletContext();
    const [selectedDate, setSelectedDate] = useState(getCurrentMonthAndYear());

    return (
        <MonthlyDataLayout
            icon="table"
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        >
            <DataTable
                data={getDataByMonthAndYear(selectedDate)}
            />
        </MonthlyDataLayout>
    );
}

export default MonthlyTableView;