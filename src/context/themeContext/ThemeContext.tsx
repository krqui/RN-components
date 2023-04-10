import React, { createContext, useEffect, useReducer } from "react"
import { ThemeState, darkTheme, lightTheme, themeReducer } from "./themeReducer";
import { AppState, Appearance, useColorScheme } from "react-native";

interface ThemeContextProps {
    theme: ThemeState, // TODO:
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    //const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(
        themeReducer,
        (Appearance.getColorScheme() === "dark") ? darkTheme : lightTheme
    ); // TODO: Read the global theme ...


    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status = "active") {
                (Appearance.getColorScheme() === "light")
                    ? setLightTheme()
                    : setDarkTheme();
            }
        })
    }, [])

    const setDarkTheme = () => {
        dispatch({ type: "set_dark_theme" })
        console.log("setDarkTheme")
    }

    const setLightTheme = () => {
        dispatch({ type: "set_light_theme" })
        console.log("setLightTheme")
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }} >
            {children}
        </ThemeContext.Provider>
    )
}




export default ThemeContext
