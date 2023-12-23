import _ from 'lodash'

export const validateReceiptProcedures = ({ procedures }) => {
  return !_.isEmpty(procedures)
}