import React, { useEffect, useState } from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({ navigation }) => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  useEffect(() => {
    const checkIfFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('@showWelcomeScreen');
        if (value === null) {
          // İlk açılışta ekranı göstermek için true yap
          setShowWelcomeScreen(true);
          // Bayrağı AsyncStorage'e kaydet
          await AsyncStorage.setItem('@showWelcomeScreen', 'false');
        }
        else {
          // İlk açılış değilse, ana ekrana yönlendir
          navigation.replace('Home');
        }
      } catch (error) {
        console.error('Hoşgeldiniz ekranı gösterilirken bir hata oluştu:', error);
        setShowWelcomeScreen(true);
      }
    };
  
    checkIfFirstLaunch();
  }, []);

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  if (!showWelcomeScreen) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background_image.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <View style={styles.content}>
          <Text style={styles.logo}>Güzellik Salonu Randevu Uygulaması</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
            Randevu almak hiç bu kadar kolay olmamıştı! Güzellik salonu randevu uygulamamızla istediğiniz zaman ve yerden randevu alabilirsiniz. Profesyonel hizmetlerimizle güzelliğinizi ön plana çıkarın. Hemen başlamak için 'Hemen Başla' butonuna dokunun!
            </Text>
          </View>
          <TouchableOpacity onPress={handleGetStarted} style={styles.startButton}>
            <Text style={styles.startButtonText}>Hemen Başla</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,

  },
  content:{
    alignItems: 'center',
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
    padding: 10,
    marginHorizontal: -10,
  },
  logo: {
    fontSize: 25,
    fontWeight: '300',
    marginBottom: 20,
    color: 'white',
  },
  descriptionContainer: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '170',
    textAlign: 'center',
    color: 'white',
  },
  startButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default WelcomeScreen;