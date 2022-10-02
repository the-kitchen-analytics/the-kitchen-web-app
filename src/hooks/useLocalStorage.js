import useWindowStorage from "./useWindowStorage"

/**
 * @param {string} key 
 * @param {*} initialValue 
 * @returns 
 */
const useLocalStorage = (key, initialValue) => {
    return useWindowStorage(window.localStorage, key, initialValue);
}

export default useLocalStorage;