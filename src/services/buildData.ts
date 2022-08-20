import { getPriceFromString } from '../utils/StringUtils.ts';
import ServiceEntry from '../domain/ServiceEntry.ts';
import Operation from '../domain/Operation.ts';
import { parseDate } from '../utils/DateUtils.ts';


const DATE_CREATED_TITLE = 'Отметка времени';
const DATE_TITLE = 'Выберите дату';
const OPERATION_NAME_TITLE = 'Выберите набор услуг';


const buildServiceData = (sheetData: any): Array<ServiceEntry> => {
    const { data } = sheetData[0];

    return data.map((dataEntry: any, i: number) => {
        const id = i;
        const date = parseDate(dataEntry[DATE_TITLE]);
        const dateCreated = parseDate(dataEntry[DATE_CREATED_TITLE]);
        const operations = buildOperations(dataEntry[OPERATION_NAME_TITLE], date);
        return new ServiceEntry(id, date, operations, dateCreated);
    });
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