const buildDaySelectOptions = (workedDays) => workedDays.map(day => ({
    key: day,
    text: day,
    value: day
}));

export default buildDaySelectOptions;