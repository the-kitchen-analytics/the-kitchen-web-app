const getPriceFromString = (text: String): Number => {
    const result = text.match(/[\$\£\€](\d+(?:\.\d{1,2})?)/);
    return parseFloat(result ? result[1] : '0')
}

export {
    getPriceFromString
}