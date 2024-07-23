import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/Main/DashboardScreen';
import SearchScreen from '../screens/Main/SearchScreen';
import QRReaderScreen from '../screens/Main/QRReaderScreen';
import BuyScreen from '../screens/Main/BuyScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';

const MainTabs = createBottomTabNavigator();

const MainNavigator = () => (
  <MainTabs.Navigator>
    <MainTabs.Screen name="Dashboard" component={DashboardScreen} />
    <MainTabs.Screen name="Search" component={SearchScreen} />
    <MainTabs.Screen name="QRReader" component={QRReaderScreen} />
    <MainTabs.Screen name="Buy" component={BuyScreen} />
    <MainTabs.Screen name="Profile" component={ProfileScreen} />
  </MainTabs.Navigator>
);

export default MainNavigator;
