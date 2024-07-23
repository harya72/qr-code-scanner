import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthProvider,useAuth } from './context/AuthContext';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/protected/DashboardScreen';
import SearchScreen from './screens/protected/SearchScreen';
import ProfileScreen from './screens/protected/ProfileScreen';
import QRReaderScreen from './screens/protected/QRReaderScreen';
import BuyScreen from './screens/protected/BuyScreen';
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const { userToken } = useAuth();

  if (!userToken) {
    return <AuthStackNavigator />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="QRReader" component={QRReaderScreen} />
      <Tab.Screen name="Buy" component={BuyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
