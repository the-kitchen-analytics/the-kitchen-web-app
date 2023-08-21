import { useEffect, useState } from 'react'

/**
 * refence: https://usehooks.com/useLocalStorage/
 * @param {Storage} windowStorage
 * @param {string} key
 * @param {*} initialValue
 * @returns
 */
const useWindowStorage = (windowStorage, key, initialValue) => {

  useEffect(() => {
    setInitialValue(windowStorage, key, initialValue)
  }, [windowStorage, key, initialValue])

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof windowStorage === 'undefined') {
      return initialValue
    }
    try {
      // Get from local storage by key
      const item = windowStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.error(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof windowStorage !== 'undefined') {
        windowStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

const setInitialValue = (windowStorage, key, value) => {
  if ([windowStorage, key, value].some(v => typeof v === 'undefined')) {
    return
  }

  try {
    if (windowStorage.getItem(key) == null) {
      windowStorage.setItem(key, JSON.stringify(value))
    }
  } catch (error) {
    console.error(error)
  }
}

export default useWindowStorage