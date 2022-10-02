import _ from "lodash";
import { useState, useMemo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { getCurrentMonthAndYear } from "../utils/date";


const useMonthlyData = (getData) => {

    const initialSelectedDate = useMemo(getCurrentMonthAndYear, []);
    const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
    const { receipts } = useOutletContext();
    const [yearOptions, setYearOptions] = useState([]);

    useEffect(() => {

        if (!_.isEmpty(receipts)) {
            const years = _.uniq(receipts.map(({ date }) => date.getFullYear()));
            setYearOptions(years);
        }

    }, [receipts]);

    const filteredData = useMemo(() => {
        if (_.isEmpty(receipts) || !_.isInteger(selectedDate.month) || !_.isInteger(selectedDate.year)) {
            return [];
        }

        return getData(selectedDate.month, selectedDate.year, receipts)
    }, [receipts, selectedDate.month, selectedDate.year, getData]);

    return [
        filteredData,
        yearOptions,
        initialSelectedDate,
        selectedDate,
        setSelectedDate,
    ];
}

export default useMonthlyData;