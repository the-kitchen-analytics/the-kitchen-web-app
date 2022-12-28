const validateProcedureWorkerIncome = (procedure) => {
  return procedure.workerIncome >= 0 && procedure.workerIncome <= procedure.price
}

export default validateProcedureWorkerIncome