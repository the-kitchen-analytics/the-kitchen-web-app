import { useOutletContext } from "react-router-dom";
import AllTimeDataLayout from "../../components/layouts/AllTimeDataLayout";
import Statistics from "../../components/Statistics";

const AllTimeStatisticsView = () => {

    const { getAllStatisticsData } = useOutletContext();

    return (
        <AllTimeDataLayout
            icon="chart bar"
        >
            <Statistics
                data={getAllStatisticsData()}
            />
        </AllTimeDataLayout>
    );
}

export default AllTimeStatisticsView;
