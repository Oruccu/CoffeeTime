
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/AntDesign'
import Health from './pages/Health'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Context from './pages/Auth/Context'
import LogIn from './pages/Auth/LogIn'
import ResetPassword from './pages/Auth/ResetPassword'
import Register from './pages/Auth/Register'
import { auth } from '../firebaseConfig'
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './Context/Store';
import Loading from './components/Loading';
import { setUserSession } from './Context/Slice';
import { el } from 'date-fns/locale';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {

  return (
    <Provider store={store}>

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
    </Provider>
  )
}

const AuthStack = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Context' component={Context} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
      </Stack.Navigator>
    </Provider>
  )
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [userSession, setUserSession] = React.useState()
  const userState= auth.currentUser;

  useEffect(() => {
  
     auth.onAuthStateChanged(
       user => {
         if(user){
           setUserSession(!!user)
           setLoading(false)
           console.log('başardın')
         }
         else{
          setUserSession(false)
         }
       })

  }, [])

  if (loading == true) {
    return <Loading />
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}>{
            !userSession ? (
              <>
                <Stack.Screen name='AuthStack' component={AuthStack} />
              </>
            ) : (

              <Stack.Screen name='Root' component={Root} />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
