import { sum } from "./ArrayUtil";

/**
 * 
 * @param {array} entriesPerADay 
 * @returns number
 */
const getTotalIncomePerADay = (entriesPerADay) => {
    return sum(entriesPerADay.map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes));
}

export {
    getTotalIncomePerADay
}