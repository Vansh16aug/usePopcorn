import { useEffect, useState } from "react";

export function UseLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const alreadyWatched = localStorage.getItem(key);
    return alreadyWatched ? JSON.parse(alreadyWatched) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
