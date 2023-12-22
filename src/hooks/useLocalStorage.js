import { useWindowStorage } from './'

/**
 * @param {string} key
 * @param {*} initialValue
 * @returns
 */
export const useLocalStorage = (key, initialValue) =>
  useWindowStorage(window.localStorage, key, initialValue)
