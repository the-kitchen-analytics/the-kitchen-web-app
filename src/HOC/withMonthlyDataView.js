import React from "react";
import { GenericView } from "../components/Common/View";

const withMonthlyDataView = (Component, getData) => (
    <GenericView header="За текущий месяц">
        <Component
            data={getData()}
        />
    </GenericView>
)

export default withMonthlyDataView