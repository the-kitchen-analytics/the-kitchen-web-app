import exampleData from '../../data/response-example.json';
import { parseDate, compareDateDesc } from '../date';

import { calculatePriceAfterTaxes, getPriceFromString } from '../money';


const createOperation = (name) => {
    const originalPrice = getPriceFromString(name);
    const priceAfterTaxes = calculatePriceAfterTaxes(originalPrice, 0.4);

    return Object.freeze({
        name,
        originalPrice,
        priceAfterTaxes
    })
}

const parseWorker = (rawString) => parseWorker;

const parseOperations = (rawString, date) => rawString
    .split(';,')
    .map(createOperation);

const parseGoogleSheetDataV2 = (data = exampleData) => {

    const headerIndexes = new Map()

    headerIndexes.set('date', -1);
    headerIndexes.set('procedures', -1);
    headerIndexes.set('worker', -1);
    headerIndexes.set('totalPriceBeforeTaxes', -1);
    headerIndexes.set('totalPriceAfterTaxes', -1);

    const setHeaderIndexes = (row, headerIndexes) => {
        for (let i = 0; i < row.length; i++) {
            if (headerIndexes.has(row[i])) {
                headerIndexes.set(row[i], i)
            }
        }
    }

    const { values } = data.valueRanges[0];

    setHeaderIndexes(values[0], headerIndexes);

    const transformRow = (row, i) => Object.freeze(
        {
            id: i,
            date: parseDate(row[headerIndexes.get('date')]),
            dateFormatted: row[headerIndexes.get('date')],
            operations: parseOperations(row[headerIndexes.get('procedures')]),
            worker: parseWorker(row[headerIndexes.get('worker')]),
            totalPriceBeforeTaxes: parseFloat(row[headerIndexes.get('totalPriceBeforeTaxes')]),
            totalPriceAfterTaxes: parseFloat(row[headerIndexes.get('totalPriceAfterTaxes')])
        }
    )

    return values.slice(1).map(transformRow).sort((a, b) => compareDateDesc(a.date, b.date));
}

export default parseGoogleSheetDataV2;