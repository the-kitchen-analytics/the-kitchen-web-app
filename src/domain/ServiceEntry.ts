import Operation from "./Operation";
import { sum } from "../utils/ArrayUtil";

export default class ServiceEntry {
    readonly id: number;
    readonly date: Date
    readonly operations: Array<Operation>
    readonly totalPriceAfterTaxes: number
    readonly dateCreated: Date;

    constructor(id: number, date: Date, operations: Array<Operation>, dateCreated: Date) {
        this.id = id;
        this.date = date;
        this.operations = operations;
        this.dateCreated = dateCreated;
        this.totalPriceAfterTaxes = sum(operations.map(op => op.priceAfterTaxes));
    }

}