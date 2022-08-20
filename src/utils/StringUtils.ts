const getPriceFromString = (text: String): Number => {
    const result = text.match(/\d+(?:[.,]\d{0,2})?/);
    return parseFloat(result ? result[0].replace(/,/, '.') : '0')
}

export {
    getPriceFromString
}