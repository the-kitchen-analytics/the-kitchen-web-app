import _ from "lodash";
import googleSheetsConfig from "../data/googleSheetsConfig";
import { formatDate } from "../utils/date";
import { parseGoogleSheetDataV2 } from '../utils/googleSheets';
import { buildPriceString } from "../utils/money";

const POST_URL = process.env.REACT_APP_POST_DATA_URL;

const buildFetchUrl = (googleSheetsConfig) => {

    const { baseUrl, sheetNames, apiKey, valueRenderOption, dateTimeRenderOption } = googleSheetsConfig;

    const params = new URLSearchParams();

    params.set('ranges', sheetNames.data);
    params.set('key', apiKey);

    if (valueRenderOption) {
        params.set('valueRenderOption', valueRenderOption);
    }

    if (dateTimeRenderOption) {
        params.set('dateTimeRenderOption', dateTimeRenderOption);
    }

    return `${baseUrl}/?${params.toString()}`;
}

const validateFetchedData = (data) => {
    return !!data;
}

const fetchData = async () => {
    const response = await fetch(buildFetchUrl(googleSheetsConfig));

    if (response.status >= 400) {
        throw new Error(`Response Error: ${response.status}, ${response.text()}`);
    }

    const data = await response.json()

    if (validateFetchedData(data)) {
        return parseGoogleSheetDataV2(data);
    }

    throw new Error(`Fetched data seem to be invalid: ${data}`);
}

const postData = (data) => {
    console.debug('post data', data)

    const { procedures, worker, date } = data;

    const transformedData = Object.freeze({
        date: formatDate(date),
        procedures: procedures
            .map(({ name, priceBeforeTaxes }) => buildPriceString(name, priceBeforeTaxes))
            .join(';,'),
        worker,
        totalPriceBeforeTaxes: _.sumBy(procedures, 'priceBeforeTaxes'),
        totalPriceAfterTaxes: _.sumBy(procedures, 'priceAfterTaxes')
    });


    return fetch(POST_URL, {
        method: 'POST',
        body: JSON.stringify(transformedData)
    });
}

const googleSheetsService = {
    fetchData,
    postData
}

export default googleSheetsService;

