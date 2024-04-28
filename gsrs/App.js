import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import KuaforScreen from './KuaforScreen';
import BerberScreen from './BerberScreen';
import CiltScreen from './CiltScreen';
import GemScreen from './GemScreen';
import MakyajScreen from './MakyajScreen';
import MasajScreen from './MasajScreen';
import SacScreen from './SacScreen';
import SolaryumScreen from './SolaryumScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Giriş Yap' }} />
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