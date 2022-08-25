import React from "react";
import { GenericView } from "../components/Common/View";

const withAllDataView = (Component, getData) => (
    <GenericView header="За всё время">
        <Component
            data={getData()}
        />
    </GenericView>
)

export default withAllDataView;