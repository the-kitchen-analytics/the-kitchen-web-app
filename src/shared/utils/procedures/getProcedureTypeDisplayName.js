import procedureTypesJSON from '../../../data/procedure-types.json'

export const getProcedureTypeDisplayName = (type) => {
  const procedure = procedureTypesJSON
    .find(it => it.name === type)

  return procedure ? procedure.displayName : type
}