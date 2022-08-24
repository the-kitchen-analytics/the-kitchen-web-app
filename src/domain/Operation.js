export default class Operation {
    date
    name
    originalPrice
    priceAfterTaxes

    #price_coef = 0.4

    constructor(name, originalPrice, date) {
        this.date = date;
        this.name = name;
        this.originalPrice = originalPrice;
        this.priceAfterTaxes = originalPrice * this.#price_coef;
    }

}