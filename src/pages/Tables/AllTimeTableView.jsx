import { useOutletContext } from 'react-router-dom'
import DataTable from '../../components/DataTable'
import AllTimeDataLayout from '../../components/layouts/AllTimeDataLayout'
import { getAllTableData } from '../../services/tableDataFilterService'

const AllTimeTableView = () => {

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

export default AllTimeTableView