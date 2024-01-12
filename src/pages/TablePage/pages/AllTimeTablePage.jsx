import { DataTable } from '../../../components/shared'
import { AllTimeDataLayout } from '../../../components/layouts'
import { getAllTableData } from '../../../services/tableDataFilterService'
import { useReceiptContext } from '../../../hooks'

export const AllTimeTablePage = () => {

  const { receipts } = useReceiptContext()

  return (
    <AllTimeDataLayout>
      <DataTable
        data={getAllTableData(receipts)}
      />
    </AllTimeDataLayout>
  )
}