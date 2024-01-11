import { useOutletContext } from 'react-router-dom'
import { DataTable } from '../../../components/shared'
import { AllTimeDataLayout } from '../../../components/layouts'
import { getAllTableData } from '../../../services/tableDataFilterService'

export const AllTimeTablePage = () => {

  const { receipts } = useOutletContext()

  return (
    <AllTimeDataLayout>
      <DataTable
        data={getAllTableData(receipts)}
      />
    </AllTimeDataLayout>
  )
}