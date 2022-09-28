import { useOutletContext } from "react-router-dom";
import AllTimeDataLayout from "../../components/layouts/AllTimeDataLayout";
import Statistics from "../../components/Statistics";
import { getAllStatisticsData } from "../../services/statisticsDataFilterService";

const AllTimeStatisticsView = () => {

    const { receiptsByDay } = useOutletContext();

    return (
        <AllTimeDataLayout
            icon="chart bar"
        >
            <Statistics
                data={getAllStatisticsData(receiptsByDay)}
            />
        </AllTimeDataLayout>
    );
}

export default AllTimeStatisticsView;
