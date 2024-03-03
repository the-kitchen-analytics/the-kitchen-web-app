import { useOutletContext } from 'react-router-dom'
import { DataTable } from '../../modules'
import { buildTableData } from './helpers'

export const TablePage = () => {
  const { receipts } = useOutletContext()
  return <DataTable {...buildTableData(receipts)} />
}