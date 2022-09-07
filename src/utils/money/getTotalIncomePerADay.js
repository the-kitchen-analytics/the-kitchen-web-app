import { sum } from "../array";

const getTotalIncomePerADay = (entriesPerADay) => {
    return sum(entriesPerADay.map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes));
}

export default getTotalIncomePerADay;