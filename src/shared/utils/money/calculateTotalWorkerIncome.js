import _ from 'lodash'

const SUM_BY_PROPERTY_NAME = 'priceAfterTaxes'

export const calculateTotalWorkerIncome = (procedures = []) => _.sumBy(procedures, SUM_BY_PROPERTY_NAME)