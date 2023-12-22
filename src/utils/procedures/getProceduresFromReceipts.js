export const getProceduresFromReceipts = (receipts) =>
  receipts.flat()
    .map(({ procedures }) => procedures)
    .flat()