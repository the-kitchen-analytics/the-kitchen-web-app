import _ from "lodash";

const validateReceiptProcedures = ({ procedures }) => {
    return !_.isEmpty(procedures);
}

export default validateReceiptProcedures;