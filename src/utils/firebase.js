import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAtaYXuVqKH4aoTFdcZeNhOAqBl-QW06tE",
  authDomain: "pokedex-web-app-17006.firebaseapp.com",
  projectId: "pokedex-web-app-17006",
  storageBucket: "pokedex-web-app-17006.appspot.com",
  messagingSenderId: "883897310186",
  appId: "1:883897310186:web:7a7ed1112c72bd17d77093",
  measurementId: "G-S610Q8FVZC"
};

firebase.initializeApp(firebaseConfig);

export default firebase;