import DataTable from "../../components/DataTable";
import MonthlyDataLayout from "../../components/layouts/MonthlyDataLayout";
import { getTableDataByMonthAndYear } from "../../services/tableDataFilterService";
import { useMonthlyData } from '../../hooks';

const MonthlyTableView = () => {

    const [
        filteredData, yearOptions, initialSelectedDate,
        selectedDate, setSelectedDate,
    ] = useMonthlyData(getTableDataByMonthAndYear);

    return (
        <MonthlyDataLayout
            icon="table"
            yearOptions={yearOptions}
            defaultSelectedDate={initialSelectedDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        >
            <DataTable
                data={filteredData}
            />
        </MonthlyDataLayout>
    );
}

export default MonthlyTableView;