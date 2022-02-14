import React, { useState } from 'react'

export default function useLocalStorage(key, initialValue) {
    const setIt = val => window.localStorage.setItem(key, JSON.stringify(val))
    const [value, setValue] = useState(() => {
      const item = window.localStorage.getItem(key)
      if (item) {
        return JSON.parse(item)
      }
      setIt(initialValue)
      return initialValue
    })
    const setValueLS = newValue => {
      setIt(newValue)
      setValue(newValue)
    }
    return [value, setValueLS]
}