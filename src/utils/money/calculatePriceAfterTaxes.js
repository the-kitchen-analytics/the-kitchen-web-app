const calculatePriceAfterTaxes = (priceBeforeTaxes, coef = 1) => {
    return priceBeforeTaxes * coef;
}

export default calculatePriceAfterTaxes;