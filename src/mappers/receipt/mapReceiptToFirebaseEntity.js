import { parseDateFromDropdown } from '../../utils'

export const mapReceiptToFirebaseEntity = (receipt) => {
  const procedures = receipt.procedures.map(procedure => ({
    name: procedure.name,
    priceBeforeTaxes: procedure.price,
    priceAfterTaxes: procedure.workerIncome || parseFloat((procedure.price * procedure.workerRate).toFixed(2)),
    type: procedure.type
  }))

  const data = Object.freeze({
    uid: receipt.uid,
    procedures: procedures,
    date: parseDateFromDropdown(receipt.date),
    dateCreated: new Date(),
    notes: receipt.notes
  })

  return data
}