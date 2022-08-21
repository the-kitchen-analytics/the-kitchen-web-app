import ServiceEntry from "../domain/ServiceEntry.ts";
import { sum } from "./ArrayUtil";

const getTotalIncomePerADay = (entriesPerADay: Array<ServiceEntry>): Number => {
    return sum(entriesPerADay.map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes));
}

export {
    getTotalIncomePerADay
}