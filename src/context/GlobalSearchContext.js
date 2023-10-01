import { createContext, useState } from "react";

const GlobalSearchContext = createContext(null);

const GlobalSearchProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("");

    const updateSearchText = (text) => {
        setSearchText(text);
    }
    return (
        <GlobalSearchContext.Provider value={{
            searchText,
            updateSearchText
        }}>
            {children}
        </GlobalSearchContext.Provider>
    )
}

export { GlobalSearchContext, GlobalSearchProvider };