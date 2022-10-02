import monthIndexes from "../../../data/monthIndexes";
import monthIndexToMonthOption from "./monthIndexToMonthOption";

const DEFAULT_MONTH_SELECT_OPTIONS = Object.freeze(monthIndexes.map(monthIndexToMonthOption));

const getMonthOptions = () => {
    return DEFAULT_MONTH_SELECT_OPTIONS
}

export default getMonthOptions;