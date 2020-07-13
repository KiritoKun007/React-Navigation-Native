import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOption = {
  headerStyle: {
    backgroundColor: '#009387'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold' 
  }
}

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={screenOption}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon
            color='#fff'
            size={25}
            name="menu-outline"
            onPress={() => {
              navigation.openDrawer();
            }} />
        )
      }} />
    </HomeStack.Navigator>
  ) 
}

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={screenOption}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => (
        <Icon
          color='#fff'
          size={25}
          name="menu-outline"
          onPress={() => {
            navigation.openDrawer();
          }} />
      )
    }} />
  </DetailsStack.Navigator>
) 

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
