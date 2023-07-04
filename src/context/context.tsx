import { createContext } from "react";

export const ThemeContext = createContext("");

type ThemeContextProviderProps = {
    children : React.ReactNode
}

const Provider = ({children} : ThemeContextProviderProps) => {

    

    const value = 'Sonam'

    return  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default Provider;