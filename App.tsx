import 'react-native-gesture-handler'
import React from 'react'
//import { DefaultTheme, Theme } from '@react-navigation/native'
import Navigator from './src/navigator/Navigator'
import { ThemeProvider } from './src/context/themeContext/ThemeContext'

/*const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors, // ...DarkTheme.colors
    //background:"black"
  }
}*/

const App = () => {
  return (
    <AppState>
      <Navigator></Navigator>
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;
