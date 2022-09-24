import { useOutletContext } from "react-router-dom";
import DataTable from "../../components/DataTable";
import AllTimeDataLayout from "../../components/layouts/AllTimeDataLayout";

const AllTimeTableView = () => {

    const { getAllData } = useOutletContext();

    return (
        <AllTimeDataLayout
            icon="table"
        >
            <DataTable
                data={getAllData()}
            />
        </AllTimeDataLayout>
    );
}

export default AllTimeTableView;