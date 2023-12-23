import { useOutletContext } from 'react-router-dom'
import { DataTable } from '../../components/DataTable'
import { AllTimeDataLayout } from '../../components/layouts'
import { getAllTableData } from '../../services/tableDataFilterService'

export const AllTimeTablePage = () => {

  const { receipts } = useOutletContext()

  return (
    <AllTimeDataLayout
      icon="home"
      header="Главная"
    >
      <DataTable
        data={getAllTableData(receipts)}
      />
    </AllTimeDataLayout>
  )
}