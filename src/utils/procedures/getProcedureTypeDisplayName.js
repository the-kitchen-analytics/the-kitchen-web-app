import procedureTypesJSON from '../../data/procedure-types.json';

const getProcedureTypeDisplayName = (type) => {
    const procedure = procedureTypesJSON
        .find(it => it.name === type)

    return procedure ? procedure.displayName : type;
}

export default getProcedureTypeDisplayName;