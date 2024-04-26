import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = () => {
      console.log("Aranan kelime:", searchText);
    };
  
    const handleProfilePress = () => {
      navigation.navigate('Login');
    };
    
  
    return (
      <View style={styles.container}>
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
        <ScrollView contentContainerStyle={styles.categoriesContainer}  showsVerticalScrollIndicator={false}>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>Kuaförler</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>Berberler</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>Güzellik ve Estetik Merkezleri</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>Saç Hizmetleri</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>Masaj Hizmetleri</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>Cilt Bakım Hizmetleri</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>Solaryum Hizmetleri</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>Makyaj Hizmetleri</Text>
          </View>
        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'lightcoral',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
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
    },
    categoryBox: {
      width: '100%', //kutu genişliği
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 3,
      marginBottom: 10,
      paddingVertical: 30,
      backgroundColor: 'lightskyblue',
      shadowColor: '#000', //gölge rengi
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3, 
      shadowRadius: 2,
      elevation: 3, //androidde gölge efekti için
    },
    categoryText: {
      padding: 10,
      marginTop: 45,
      alignSelf: 'baseline',
      textAlign: 'left',
      color: 'white',
      backgroundColor: 'rgba(128, 128, 128, 0.7)', // Opak gri arka plan
    },
  });
  
  export default HomeScreen;
  