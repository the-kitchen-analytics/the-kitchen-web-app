const defaultMapFn = (entry) => entry;

const buildDropdownOptions = (array, getKey = defaultMapFn, getText = defaultMapFn, getValue = defaultMapFn) => {
    return array.map(entry => ({
        key: getKey(entry),
        text: getText(entry),
        value: getValue(entry)
    }));
}

export default buildDropdownOptions;