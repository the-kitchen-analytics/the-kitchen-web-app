import _ from 'lodash'

export const sortChartData = (data) => _.orderBy(data, 'value', 'desc')

export const calculateTotal = (data) => _.sumBy(data, item => item.value)
