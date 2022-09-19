import { parseISO } from "date-fns";

const baseUrl = process.env.REACT_APP_API_URL;
const healthCheckUrl = `${process.env.REACT_APP_API_URL}/health`;
const loginUrl = `${baseUrl}/login`;
const dataApiUrl = `${baseUrl}/api/data`;

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

const fetchWrapper = (url, options = {}) => fetch(url, options);

const getData = async () => {
    const response = await fetchWrapper(dataApiUrl);

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

    return fetchWrapper(dataApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

const healthCheck = () => fetchWrapper(healthCheckUrl);

const login = async (credentials) => {

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(credentials)
    }

    const response = await fetchWrapper(loginUrl, fetchOptions);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.status);
    }
}

const apiService = Object.freeze({
    getData,
    postData,
    login,
    healthCheck
});

export default apiService;

