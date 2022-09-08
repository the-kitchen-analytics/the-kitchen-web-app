import { getPriceFromString, calculatePriceAfterTaxes } from '../money';
import { sum } from '../array';
import { formatDate, parseDate, compareDateDesc } from '../date';

import { DATE_TITLE, DATE_CREATED_TITLE, OPERATION_NAME_TITLE } from '../../data/googleSheetsConstants';

const createEntry = (id, date, operations, dateCreated) => {
    return {
        id,
        date,
        dateFormatted: formatDate(date),
        operations,
        dateCreated,
        totalPriceBeforeTaxes: sum(operations.map(({ originalPrice }) => originalPrice)),
        totalPriceAfterTaxes: sum(operations.map(({ priceAfterTaxes }) => priceAfterTaxes))
    }
}

const createOperation = (name, originalPrice, date) => {
    return {
        date,
        name,
        originalPrice,
        priceAfterTaxes: calculatePriceAfterTaxes(originalPrice, 0.4)
    }
}

const sort = (entries) => {
    return entries.sort((a, b) => compareDateDesc(a.date, b.date));
}

const parseGoogleSheetData = (sheetData) => {
    console.debug('parseGoogleSheetData', sheetData);

    const serviceDataArray = sheetData.map((dataEntry, i) => {
        const id = i;
        const date = parseDate(dataEntry[DATE_TITLE]);
        const dateCreated = parseDate(dataEntry[DATE_CREATED_TITLE]);

        const operations = dataEntry[OPERATION_NAME_TITLE]
            .split(";,")
            .map(operationName => createOperation(operationName, getPriceFromString(operationName), date))

        return createEntry(id, date, operations, dateCreated);
    });

    return sort(serviceDataArray);
}

export default parseGoogleSheetData;