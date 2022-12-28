import useWindowStorage from './useWindowStorage'

/**
 * @param {string} key 
 * @param {*} initialValue 
 * @returns 
 */
const useSessionStorage = (key, initialValue) => {
  return useWindowStorage(window.sessionStorage, key, initialValue)
}

export default useSessionStorage