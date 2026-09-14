import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    let text = localStorage.getItem(key);
    if (!text) return initialValue;
    let data = JSON.parse(text);
    return data;
  });

  function setValue(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
    setStoredValue(newValue);
  }

  return [storedValue, setValue];
}
