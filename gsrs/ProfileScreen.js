import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const ProfileScreen = () => {
  const [avatarSource, setAvatarSource] = useState(null);
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('********'); // Şifre gizli

  const selectImage = () => {
    const options = {
      title: 'Fotoğraf Seç',
      cancelButtonTitle: 'İptal',
      takePhotoButtonTitle: 'Kamera ile Çek',
      chooseFromLibraryButtonTitle: 'Galeriden Seç',
      mediaType: 'photo',
      quality: 1,
      maxWidth: 500,
      maxHeight: 500,
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Kullanıcı seçimi iptal etti');
      } else if (response.error) {
        console.log('Hata:', response.error);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
  }

  const handleUpdateProfile = () => {
    // Profil güncelleme
    console.log('Kullanıcı adı:', username);
    console.log('E-posta:', email);
    console.log('Şifre:', password);
    alert('Profil bilgileriniz güncellendi!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage} style={styles.avatarContainer}>
        {avatarSource === null ? (
          <Text style={styles.avatarText}>Profil Fotoğrafını Seç</Text>
        ) : (
          <Image source={avatarSource} style={styles.avatarImage} />
        )}
      </TouchableOpacity>

      <Text style={styles.title}>Profil</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="E-posta"
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
      <TouchableOpacity onPress={handleUpdateProfile} style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Bilgileri Güncelle</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  updateButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    color: 'black',
  },
  avatarImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

export default ProfileScreen;
