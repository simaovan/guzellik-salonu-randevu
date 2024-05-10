import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const HomeScreen = ({navigation}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log("Aranan kelime:", searchText);
    };

    const handleProfilePress = () => {
        navigation.navigate('Login');
    };

    const handleKuaforPress = () => {
        navigation.navigate('Kuafor');
    };

    const handleBerberPress = () => {
        navigation.navigate('Berber');
    };

    const handleGemPress = () => {
        navigation.navigate('Gem');
    };

    const handleSacPress = () => {
        navigation.navigate('Sac');
    };

    const handleMasajPress = () => {
        navigation.navigate('Masaj');
    };

    const handleCiltPress = () => {
        navigation.navigate('Cilt');
    };

    const handleSolaryumPress = () => {
        navigation.navigate('Solaryum');
    };

    const handleMakyajPress = () => {
        navigation.navigate('Makyaj');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Salon adı ara..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Ara</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleProfilePress} style={styles.profileButton}>
                    <Text style={styles.profileButtonText}>Profil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.categoriesContainer}>
                <TouchableOpacity onPress={handleKuaforPress} style={styles.categoryBox}>
                    <ImageBackground source={require('../assets/background_kuafor.png')} resizeMode="cover" style={styles.image}>
                        <Text style={styles.categoryText}>Kuaförler</Text>
                    </ImageBackground>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={handleBerberPress} style={styles.categoryBox}>
                    <ImageBackground source={require('../assets/background_berber.png')} resizeMode="cover" style={styles.image}>
                        <Text style={styles.categoryText}>Berberler</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleGemPress} style={styles.categoryBox}>
                    <ImageBackground source={require('../assets/background_beauty.png')} resizeMode="cover" style={styles.image}>
                      <Text style={styles.categoryText}>Güzellik ve Estetik Merkezleri</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSacPress} style={styles.categoryBox}>
                    <ImageBackground source={require('../assets/background_hair.png')} resizeMode="cover" style={styles.image}>
                      <Text style={styles.categoryText}>Saç Hizmetleri</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMasajPress} style={styles.categoryBox}>
                    <ImageBackground source={require('../assets/background_massage.png')} resizeMode="cover" style={styles.image}>
                      <Text style={styles.categoryText}>Masaj Hizmetleri</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCiltPress} style={styles.categoryBox}>
                    <ImageBackground source={require('../assets/background_skincare.png')} resizeMode="cover" style={styles.image}>
                      <Text style={styles.categoryText}>Cilt Bakım Hizmetleri</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSolaryumPress} style={styles.categoryBox}>
                    <ImageBackground source={require('../assets/background_solarium.png')} resizeMode="cover" style={styles.image}>
                      <Text style={styles.categoryText}>Solaryum Hizmetleri</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMakyajPress} style={styles.categoryBox}>
                    <ImageBackground source={require('../assets/background_makeup.png')} resizeMode="cover" style={styles.image}>
                      <Text style={styles.categoryText}>Makyaj Hizmetleri</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightcoral',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 20,
    },
    searchInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      backgroundColor: 'white',
    },
    searchButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      margin:3,
    },
    searchButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    profileButton: {
      backgroundColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      margin: 3,
    },
    profileButtonText: {
      color: 'black',
      fontWeight: 'bold',
    },
    categoriesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    categoryBox: {
      width: '100%',
      height: 125,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 3,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    categoryText: {
      padding: 10,
      marginTop: 45,
      alignSelf: 'baseline',
      textAlign: 'left',
      color: 'white',
      backgroundColor: 'rgba(128, 128, 128, 0.7)',
    },
    image: {
      width: '100%',
      height: '100%',
    },
});

export default HomeScreen;
