import { useOutletContext } from "react-router-dom";
import DataTable from "../../components/DataTable";
import AllTimeDataLayout from "../../components/layouts/AllTimeDataLayout";

const AllTimeTableView = () => {

    const { getAllTableData } = useOutletContext();

    return (
        <AllTimeDataLayout
            icon="table"
        >
            <DataTable
                data={getAllTableData()}
            />
        </AllTimeDataLayout>
    );
}

export default AllTimeTableView;