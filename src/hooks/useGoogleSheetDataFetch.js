import useGoogleSheets from 'use-google-sheets';

const useDataFetch = () => {
    const googleSheetsOptions = {
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
        // sheetsOptions: [{ id: process.env.REACT_APP_GOOGLE_SHEETS_LIST_ID }]
    };

    return useGoogleSheets(googleSheetsOptions)
}

export default useDataFetch;