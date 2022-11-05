import _ from "lodash";

export const JANUARY = 0;
export const FEBRUARY = 1;
export const MARCH = 2;
export const APRIL = 3;
export const MAY = 4;
export const JUNE = 5;
export const JULY = 6;
export const AUGUST = 7;
export const SEPTEMBER = 8;
export const OCTOBER = 9;
export const NOVEMBER = 10;
export const DECAMBER = 11;

const monthIndexes = Object.freeze([
    JANUARY, FEBRUARY, MARCH, APRIL,
    MAY, JUNE, JULY, AUGUST,
    SEPTEMBER, OCTOBER, NOVEMBER, DECAMBER
]);

export const FIRST_MONTH_INDEX = monthIndexes[0];
// export const LAST_MONTH_INDEX = monthIndexes.at(-1);
export const LAST_MONTH_INDEX = _.last(monthIndexes);

export default monthIndexes;