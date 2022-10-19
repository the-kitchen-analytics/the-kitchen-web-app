import validate from "../common/validate";
import validateProcedureName from "./validateProcedureName";
import validateProcedurePrice from "./validateProceduresPrice";
import validateProcedureType from "./validateProcedureType";
import validateProcedureWorkerCategory from "./validateProcedureWorkerCategory";
import validateProcedureWorkerIncome from "./validateProcedureWorkerIncome";

const validators = Object.freeze([
    validateProcedureName,
    validateProcedurePrice,
    validateProcedureType,
    validateProcedureWorkerCategory,
    validateProcedureWorkerIncome,
]);

const validateProcedure = (procedure) => {
    return validate(procedure, validators);
}

export default validateProcedure;