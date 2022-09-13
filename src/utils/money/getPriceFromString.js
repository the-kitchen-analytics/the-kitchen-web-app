const getPriceFromString = (text) => {
    const result = text.match(/€\d+(?:[.,]\d{0,2})?/);
    return parseFloat(result ? result[0].replace('€', '').replace(/,/, '.') : '0');
}

export default getPriceFromString;