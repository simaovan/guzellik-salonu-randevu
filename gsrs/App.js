import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignInScreen from './screens/SignInScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import KuaforScreen from './screens/KuaforScreen';
import BerberScreen from './screens/BerberScreen';
import CiltScreen from './screens/CiltScreen';
import GemScreen from './screens/GemScreen';
import MakyajScreen from './screens/MakyajScreen';
import MasajScreen from './screens/MasajScreen';
import SacScreen from './screens/SacScreen';
import SolaryumScreen from './screens/SolaryumScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthenticatedScreen from './screens/AuthenticatedScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Kayıt Ol' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Şifremi Unuttum' }} />
        <Stack.Screen name="Kuafor" component={KuaforScreen} options={{ title: 'Kuaför Listesi' }} />
        <Stack.Screen name="Berber" component={BerberScreen} options={{ title: 'Berberler' }} />
        <Stack.Screen name="Gem" component={GemScreen} options={{ title: 'Güzellik ve Estetik Merkezleri' }} />
        <Stack.Screen name="Cilt" component={CiltScreen} options={{ title: 'Cilt Bakım Hizmetleri' }} />
        <Stack.Screen name="Makyaj" component={MakyajScreen} options={{ title: 'Makyaj Hizmetleri' }} />
        <Stack.Screen name="Masaj" component={MasajScreen} options={{ title: 'Masaj Hizmetleri' }} />
        <Stack.Screen name="Sac" component={SacScreen} options={{ title: 'Saç Hizmetleri' }} />
        <Stack.Screen name="Solaryum" component={SolaryumScreen} options={{ title: 'Solaryum Hizmetleri' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;