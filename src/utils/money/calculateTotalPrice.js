import _ from 'lodash'

const SUM_BY_PROPERTY_NAME = 'priceBeforeTaxes'

export const calculateTotalPrice = (procedures = []) =>  _.sumBy(procedures, SUM_BY_PROPERTY_NAME)