import { useWindowStorage } from './'

/**
 * @param {string} key
 * @param {*} initialValue
 * @returns
 */
export const useSessionStorage = (key, initialValue) =>
  useWindowStorage(window.sessionStorage, key, initialValue)