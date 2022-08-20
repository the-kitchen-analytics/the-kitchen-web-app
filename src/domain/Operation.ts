export default class Operation {
    readonly date: Date;
    readonly name: string;
    readonly originalPrice: number;
    readonly priceAfterTaxes: number;

    readonly #price_coef = 0.4;

    constructor(name: string, originalPrice: number, date: Date) {
        this.date = date;
        this.name = name;
        this.originalPrice = originalPrice;
        this.priceAfterTaxes = originalPrice * this.#price_coef;
    }

}