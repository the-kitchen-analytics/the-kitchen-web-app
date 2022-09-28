import { useDataFilters, useTableFilters, useStatisticsFilters } from "../hooks";

export default function WithDataFilters(Component, data) {

    return function WithDataFilters({ ...props }) {

        const dataFilters = useDataFilters(data, data?.groupedData);

        const {
            getAllTableData,
            getTableDataByDay,
            getTableDataByMonthAndYear,
        } = useTableFilters(dataFilters);

        const {
            getAllStatisticsData,
            getStatisticsDataByMonthAndYear,
            getStaisticsDataByDay,
        } = useStatisticsFilters(dataFilters);

        const newProps = {
            ...props,
            getAllTableData,
            getTableDataByDay,
            getTableDataByMonthAndYear,
            getAllStatisticsData,
            getStatisticsDataByMonthAndYear,
            getStaisticsDataByDay,
        }

        return (
            <Component {...newProps} />
        );
    };
}