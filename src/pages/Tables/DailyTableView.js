import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DataTable from "../../components/DataTable";
import DailyDataLayout from "../../components/layouts/DailyDataLayout";

const DailyTableView = () => {

    const { getDataByDay, workedDays } = useOutletContext();
    const [selectedDay, setSelectedDay] = useState('');

    return (
        <div className="view">
            <DailyDataLayout
                icon="table"
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                options={workedDays}
                component={DailyTableView}
            >
                <DataTable
                    data={getDataByDay(selectedDay)}
                />
            </DailyDataLayout>
        </div>
    )
}

export default DailyTableView;