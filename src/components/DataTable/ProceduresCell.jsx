import React from "react";
import ProceduresList from "../ProceduresList/ProceduresList";

const ProceduresCell = ({ id, procedures }) => (
    <ProceduresList
        listProps={{
            relaxed: true,
            bulleted: true,
        }}
        linkTo={id ? `/dashboard/receipts/${id}` : null}
        procedures={procedures}
    />
);

export default ProceduresCell;