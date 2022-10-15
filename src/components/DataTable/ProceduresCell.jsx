import React from "react";
import ProceduresList from "../ProceduresList/ProceduresList";

const ProceduresCell = ({ id, procedures }) => (
    <ProceduresList
        linkTo={`/dashboard/receipts/${id}`}
        procedures={procedures}
    />
);

export default ProceduresCell;