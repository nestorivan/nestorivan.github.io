import { useEffect, useState } from "react";

const usePrefersDarkMode = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => setPrefersDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersDarkMode;
};

export default usePrefersDarkMode;
