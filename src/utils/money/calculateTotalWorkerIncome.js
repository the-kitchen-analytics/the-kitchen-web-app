import _ from "lodash";

export default function calculateTotalWorkerIncome(procedures = []) {
    return _.sumBy(procedures, 'priceAfterTaxes');
}