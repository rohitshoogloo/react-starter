import { createContext, useState } from "react";

const DarkThemeContext = createContext(null);

const DarkThemeProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    const changeThemeMode = () => {
        setIsDark((prev) => !isDark);
    }

    return (
        <DarkThemeContext.Provider value={{ theme: isDark, changeThemeMode }}>
            {children}
        </DarkThemeContext.Provider>
    )
} 

export { 
    DarkThemeContext,
    DarkThemeProvider
}