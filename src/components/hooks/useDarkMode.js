import React, { useState } from "react"
import useLocalStorage from "./useLocalStorage"

export default function useDarkMode(key, initialState) {
    console.log(useLocalStorage);
    const [darkMode, setDarkMode] = useLocalStorage(key, initialState);
    
    return [darkMode, setDarkMode]
}