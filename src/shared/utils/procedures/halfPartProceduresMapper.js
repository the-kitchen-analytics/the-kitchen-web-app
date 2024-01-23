import _ from 'lodash'

export const halfPartProceduresMapper = (procedure, shouldDisplayHalfPartProcedures = false) => {
  if (shouldDisplayHalfPartProcedures) {
    return {
      ...procedure,
      name: `1/2 ${procedure.name}`,
      price: halve(procedure.price),
      workerIncome: halve(procedure.workerIncome)
    }
  }

  return { ...procedure }
}

const halve = (a) => {
  return _.round(_.divide(a, 2), 2)
}