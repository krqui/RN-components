import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import ThemeContext from '../context/themeContext/ThemeContext';

import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import CustomSectionListScreen from '../screens/CustomSectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigator = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }} >
      {/* Here ↑ the background is painted so that during the screen transition in dark mode, during the second of switching the screen does not turn white, but also occupies the black color of the dark theme. */}
      <NavigationContainer theme={theme} >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              //backgroundColor: 'white'
            }
          }}
        >
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='Animation101Screen' component={Animation101Screen}></Stack.Screen>
          <Stack.Screen name='Animation102Screen' component={Animation102Screen}></Stack.Screen>
          <Stack.Screen name='SwitchScreen' component={SwitchScreen}></Stack.Screen>
          <Stack.Screen name='AlertScreen' component={AlertScreen}></Stack.Screen>
          <Stack.Screen name='TextInputScreen' component={TextInputScreen}></Stack.Screen>
          <Stack.Screen name='PullToRefreshScreen' component={PullToRefreshScreen}></Stack.Screen>
          <Stack.Screen name='CustomSectionListScreen' component={CustomSectionListScreen}></Stack.Screen>
          <Stack.Screen name='ModalScreen' component={ModalScreen} ></Stack.Screen>
          <Stack.Screen name='InfiniteScrollScreen' component={InfiniteScrollScreen} ></Stack.Screen>
          <Stack.Screen name='SlidesScreen' component={SlidesScreen} ></Stack.Screen>
          <Stack.Screen name='ChangeThemeScreen' component={ChangeThemeScreen} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Navigator;