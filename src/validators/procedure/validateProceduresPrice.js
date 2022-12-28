const validateProcedurePrice = (procedure) => {
  return procedure.price >= 0
}

export default validateProcedurePrice