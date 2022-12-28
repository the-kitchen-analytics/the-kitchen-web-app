import _ from 'lodash'

const sortProcedures = (procedures) => {
  return _.sortBy(procedures, 'name')
}

export default sortProcedures