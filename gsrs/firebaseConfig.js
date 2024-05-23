import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPDNUKwgbY0wcJZooVUUD3Uolgx6t0myw",
  authDomain: "gsrs-1b9bd.firebaseapp.com",
  projectId: "gsrs-1b9bd",
  storageBucket: "gsrs-1b9bd.appspot.com",
  messagingSenderId: "419763627515",
  appId: "1:419763627515:web:24936b422ace9e41e3975e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export const firestore = firebase.firestore();