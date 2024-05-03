import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPDNUKwgbY0wcJZooVUUD3Uolgx6t0myw",
  authDomain: "gsrs-1b9bd.firebaseapp.com",
  projectId: "gsrs-1b9bd",
  storageBucket: "gsrs-1b9bd.appspot.com",
  messagingSenderId: "419763627515",
  appId: "1:419763627515:web:24936b422ace9e41e3975e"
};

const app = initializeApp(firebaseConfig);

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  
  const auth = getAuth(app);
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return () => unsubscribe();
  }, [auth]);


const handleAuthentication = async () => {
  try {
    if (user) {
      // If user is already authenticated, log out
      Alert.alert('Başarıyla çıkış yapıldı');
      await signOut(auth);
      navigation.navigate('Home');
    } else {
      // Sign in or sign up
      if (isLogin) {
        // Sign in
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Başarıyla giriş yapıldı');
        navigation.navigate('Home');
      } else {
        // Sign up
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Başarıyla kayıt olundu');
        navigation.navigate('Profile');
      }
    }
  } catch (error) {
    console.error('Authentication error:', error.message);
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity onPress={handleAuthentication} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.signinButton}>
        <Text style={styles.signinButtonText}>{isLogin ? 'Kayıt Ol' : 'Giriş Yap'}</Text>
      </TouchableOpacity>

    </View>
    

    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightcoral',
  },
  titleContainer: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signinButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  signinButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;
