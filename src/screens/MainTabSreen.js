import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const screenOption = {
    headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold' 
    }
}

export const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: 'indianred',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: 'indigo',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'orange',
          tabBarIcon: ({ color }) => (
            <Icon name="person-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)
  
export const HomeStackScreen = ({ navigation }) => {
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
  
export const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={screenOption}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerStyle: {
            backgroundColor: 'indianred'
        },
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