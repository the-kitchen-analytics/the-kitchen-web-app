import { useOutletContext } from "react-router-dom";
import DataTable from "../../components/DataTable";
import AllTimeDataLayout from "../../components/layouts/AllTimeDataLayout";
import { getAllTableData } from "../../services/tableDataFilterService";

const AllTimeTableView = () => {

    const { receiptsByDay } = useOutletContext();

    return (
        <AllTimeDataLayout
            icon="table"
        >
            <DataTable
                data={getAllTableData(receiptsByDay)}
            />
        </AllTimeDataLayout>
    );
}

export default AllTimeTableView;