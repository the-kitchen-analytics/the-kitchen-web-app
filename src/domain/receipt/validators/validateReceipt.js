import { validate } from '../../../shared/validators'
import { validateReceiptDate } from './validateReceiptDate'
import { validateReceiptProcedures } from './validateReceiptProcedures'

const validators = Object.freeze([
  validateReceiptDate,
  validateReceiptProcedures
])

export const validateReceipt = (receipt) => {
  console.debug('validate receipt', receipt)
  return validate(receipt, validators)
}