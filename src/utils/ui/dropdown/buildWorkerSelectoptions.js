import getAvatarPathByName from "../getAvatarPathByName";

const buildWorkerSelectOptions = (workersData) => {
    const dataEntryToSelectOption = ({ id, name, avatar }) => ({
        key: id,
        text: name,
        value: name,
        image: { avatar: true, src: getAvatarPathByName(avatar) }
    })

    return Object.freeze(workersData.map(dataEntryToSelectOption))
};

export default buildWorkerSelectOptions;