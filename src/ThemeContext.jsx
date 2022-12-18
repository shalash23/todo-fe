import { createContext, useState } from "react";

export const DefaultTheme = createContext();

export const ThemeModeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    return (
        <DefaultTheme.Provider value={[themeMode,setThemeMode]}>{children}</DefaultTheme.Provider>
    )
};
