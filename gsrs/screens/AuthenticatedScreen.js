import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.emailText}>{user.email}</Text>
        <Button title="Logout" onPress={handleAuthentication}/>
      </View>
    );
  };