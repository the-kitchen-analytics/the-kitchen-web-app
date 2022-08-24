import { sum } from "../utils/ArrayUtil";
import { formatDate } from "../utils/DateUtils";

export default class ServiceEntry {
    id
    date
    dateFormatted
    operations
    totalPriceBeforeTaxes
    totalPriceAfterTaxes
    dateCreated

    constructor(id, date, operations, dateCreated) {
        this.id = id;
        this.date = date;
        this.dateFormatted = formatDate(date)
        this.operations = operations;
        this.dateCreated = dateCreated;
        this.totalPriceBeforeTaxes = sum(operations.map(({ originalPrice }) => originalPrice));
        this.totalPriceAfterTaxes = sum(operations.map(({ priceAfterTaxes }) => priceAfterTaxes));
    }

}