import React from "react";
import { Dropdown, Loader } from "semantic-ui-react";
import useGoogleSheets from "use-google-sheets";
import getAvatarPathByName from "../../../../services/getAvatarPathByName";


const useWorkerData = () => {

    const googleSheetsOptions = {
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
        sheetsOptions: [{ id: 'Kitchen Helpers' }]
    };

    const result = useGoogleSheets(googleSheetsOptions)

    if (result.loading || result.error) {
        return result
    }

    const dataEntryToSelectOption = ({ id, name, avatarName }) => ({
        key: id,
        text: name,
        value: name,
        image: { avatar: true, src: getAvatarPathByName(avatarName) }
    })

    const transformData = (data) => {
        const entries = data[0].data
        return entries.map(dataEntryToSelectOption)
    }


    return Object.freeze({
        ...result,
        data: transformData(result.data)
    })
}


const WorkerSelect = ({ label, name, value, handleChange, options = [] }) => {

    const { data, loading } = useWorkerData()

    if (loading) {
        return (
            <Loader />
        )
    }

    console.debug(data);

    return (
        <>
            {
                label && (
                    <label>{label}</label>
                )
            }
            <Dropdown
                placeholder={label}
                fluid
                selection
                value={value}
                name={name}
                onChange={(e, value) => handleChange({ target: value })}
                options={data}
            />
        </>
    )
}


export default WorkerSelect