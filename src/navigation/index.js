import React from 'react'
import { Platform } from 'react-native'

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import HomeScreen from '../components/screens/HomeScreen'
import TestScreen from '../components/screens/TestScreen'

const HomeStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
  },
  {
    headermode: 'none'
  }
)

const TestStack = StackNavigator(
  {
    Test: {
      screen: TestScreen
    },
  }
)

const RootStack = TabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Test: {
      screen: TestStack
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
)

export default RootStack