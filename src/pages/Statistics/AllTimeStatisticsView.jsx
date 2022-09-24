import { useOutletContext } from "react-router-dom";
import AllTimeDataLayout from "../../components/layouts/AllTimeDataLayout";
import Statistics from "../../components/Statistics";

const AllTimeStatisticsView = () => {

    const { getAllData } = useOutletContext();

    return (
        <AllTimeDataLayout
            icon="chart bar"
        >
            <Statistics
                data={getAllData()}
            />
        </AllTimeDataLayout>
    );
}

export default AllTimeStatisticsView;
