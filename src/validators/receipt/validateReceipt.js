import validate from "../common/validate";
import validateReceiptDate from "./validateReceiptDate";
import validateReceiptProcedures from "./validateReceiptProcedures";

const validators = Object.freeze([
    validateReceiptDate,
    validateReceiptProcedures,
]);

const validateReceipt = (procedure) => {
    return validate(procedure, validators);
}

export default validateReceipt;