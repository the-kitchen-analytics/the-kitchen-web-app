import { getPriceFromString } from '../utils/StringUtils.ts';
import ServiceEntry from '../domain/ServiceEntry.ts';
import Operation from '../domain/Operation.ts';
import { parseDate, compare } from '../utils/DateUtils.ts';


const DATE_CREATED_TITLE = 'Отметка времени';
const DATE_TITLE = 'Выберите дату';
const OPERATION_NAME_TITLE = 'Выберите набор услуг';


const buildServiceData = (sheetData: any): Array<ServiceEntry> => {
    const { data } = sheetData[0];

    const serviceDataArray = data.map((dataEntry: any, i: number) => {
        const id = i;
        const date = parseDate(dataEntry[DATE_TITLE]);
        const dateCreated = parseDate(dataEntry[DATE_CREATED_TITLE]);
        const operations = buildOperations(dataEntry[OPERATION_NAME_TITLE], date);
        return new ServiceEntry(id, date, operations, dateCreated);
    });

    return sort(serviceDataArray);
}

const sort = (entries: Array<ServiceEntry>): Array<ServiceEntry> => {
    return entries.sort((a, b) => compare(a.date, b.date));
}

const buildOperations = (data: any, date: Date): Array<Operation> => {
    return data
        .split(";,")
        .map(operation => {
            const originalPrice = getPriceFromString(operation)
            return new Operation(operation, originalPrice, date)
        })
}

export default buildServiceData;