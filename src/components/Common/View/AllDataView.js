import React from "react";
import GenericView from "./GenericView";

const AllDataView = ({ getData, component }) => {

    const Component = component;

    return (
        <GenericView header="За всё время">
            <Component
                data={getData()}
            />
        </GenericView>
    )
}

export default AllDataView;