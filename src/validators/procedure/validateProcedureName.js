import _ from 'lodash'

const validateProcedureName = (procedure) => {
  return !_.isEmpty(procedure.name)
}

export default validateProcedureName