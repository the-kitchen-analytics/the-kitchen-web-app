import Operation from "./Operation";
import { sum } from "../utils/ArrayUtil";

export default class ServiceEntry {
    readonly id: number;
    readonly date: Date;
    readonly operations: Array<Operation>;
    readonly totalPriceBeforeTaxes: number;
    readonly totalPriceAfterTaxes: number;
    readonly dateCreated: Date;

    constructor(id: number, date: Date, operations: Array<Operation>, dateCreated: Date) {
        this.id = id;
        this.date = date;
        this.operations = operations;
        this.dateCreated = dateCreated;
        this.totalPriceBeforeTaxes = sum(operations.map(({ originalPrice }) => originalPrice));
        this.totalPriceAfterTaxes = sum(operations.map(({ priceAfterTaxes }) => priceAfterTaxes));
    }

}