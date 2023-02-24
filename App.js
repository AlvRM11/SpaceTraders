import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import LoansScreen from './screens/LoansScreen';
import ShipsScreen from './screens/ShipsScreen';
import LoginScreen from './screens/LoginScreens/LoginScreen';
import SignInScreen from './screens/LoginScreens/SignInScreen';
import SignUpScreen from './screens/LoginScreens/SignUpScreen';
import { useState } from 'react';

const Drawer = createDrawerNavigator();

export default function App() {
  const [signIn, setSignIn] = useState({});

  return (
    Object.entries(signIn).length === 0
      ?
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Login'>
          <Drawer.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
          <Drawer.Screen name='SignIn' options={{headerShown: false}}>
            {() => <SignInScreen setSignIn={setSignIn} />}
          </Drawer.Screen>
          <Drawer.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </NavigationContainer>
      :
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Loans' component={LoansScreen} />
          <Drawer.Screen name='Ships' component={ShipsScreen} />
          <Drawer.Screen name='Login' component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}