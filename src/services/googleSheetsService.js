import { parseISO } from "date-fns";

const baseUrl = process.env.REACT_APP_API_URL;

const validateFetchedData = (data) => {
    return !!data;
}

const transformDataEntry = (dataEntry) => {
    return Object.freeze({
        ...dataEntry,
        date: parseISO(dataEntry.date)
    });
}

const transformData = (dataSet) => dataSet.map(transformDataEntry);

const fetchData = async () => {
    const response = await fetch(baseUrl);

    if (response.status >= 400) {
        throw new Error(`Response Error: ${response.status}, ${response.text()}`);
    }

    const data = await response.json()

    if (validateFetchedData(data)) {
        return transformData(data);
    }

    throw new Error(`Fetched data seems to be invalid: ${data}`);
}

const postData = (data) => {
    console.debug('post data', data);

    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

const googleSheetsService = {
    fetchData,
    postData
}

export default googleSheetsService;

