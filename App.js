import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackScreen, DetailsStackScreen, MainTabScreen } from './src/screens/MainTabSreen';

const Drawer = createDrawerNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
