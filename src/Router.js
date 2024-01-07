
import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/AntDesign'
import Health from './pages/Health'
import Home from './pages/Home'
import Settings from './pages/Settings'

import Context from './pages/Auth/Context'
import LogIn from './pages/Auth/LogIn'
import Register from './pages/Auth/Register'
import { auth } from '../firebaseConfig'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#fffefc',
        },
        tabBarInactiveTintColor: '#d4ba99',
        tabBarActiveTintColor: '#AA6B55'
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Health'
        component={Health}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="hearto" size={26} color={color} />
          )
        }} />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="setting" size={26} color={color} />
          )
        }} />
    </Tab.Navigator>
  )
}

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='Context' component={Context} />
      <Stack.Screen name='LogIn' component={LogIn} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}

export default function App() {
  const [userSession, setUserSession] = React.useState()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarHideOnKeyboard: true, }}>
      {
        !userSession ? (
          <Stack.Screen name='AuthStack' component={AuthStack} />

        ):(
          <>
          <Stack.Screen name='Root' component={Root} />
          </>
          )
        }


      </Stack.Navigator>
    </NavigationContainer>
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
