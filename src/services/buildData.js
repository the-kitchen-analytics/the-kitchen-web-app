import { getPriceFromString } from '../utils/StringUtils';
import ServiceEntry from '../domain/ServiceEntry';
import Operation from '../domain/Operation';
import { parseDate, compare } from '../utils/DateUtils';


const DATE_CREATED_TITLE = 'Отметка времени';
const DATE_TITLE = 'Выберите дату';
const OPERATION_NAME_TITLE = 'Выберите набор услуг';


const buildServiceData = (sheetData) => {
    const { data } = sheetData[0];

    const serviceDataArray = data.map((dataEntry, i) => {
        const id = i;
        const date = parseDate(dataEntry[DATE_TITLE]);
        const dateCreated = parseDate(dataEntry[DATE_CREATED_TITLE]);
        const operations = buildOperations(dataEntry[OPERATION_NAME_TITLE], date);
        return new ServiceEntry(id, date, operations, dateCreated);
    });

    return sort(serviceDataArray);
}

const sort = (entries) => {
    return entries.sort((a, b) => compare(a.date, b.date));
}

const buildOperations = (data, date) => {
    return data
        .split(";,")
        .map(operation => {
            const originalPrice = getPriceFromString(operation)
            return new Operation(operation, originalPrice, date)
        })
}

export default buildServiceData;