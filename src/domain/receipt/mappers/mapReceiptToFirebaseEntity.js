import { parseDateFromDropdown } from '../../../shared/utils'
import { Timestamp } from 'firebase/firestore'

export const mapReceiptToFirebaseEntity = (receipt) => {
  const procedures = receipt.procedures.map(procedure => ({
    name: procedure.name,
    priceBeforeTaxes: procedure.price,
    priceAfterTaxes: procedure.workerIncome || parseFloat((procedure.price * procedure.workerRate).toFixed(2)),
    type: procedure.type
  }))

  return Object.freeze({
    uid: receipt.uid,
    procedures: procedures,
    date: Timestamp.fromDate(parseDateFromDropdown(receipt.date)),
    dateCreated: Timestamp.now(),
    notes: receipt.notes
  })
}