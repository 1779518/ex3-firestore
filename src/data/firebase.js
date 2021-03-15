import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAPWgfU_eSPhNQQf2Gyncew2kgo-OMUNIQ",
  authDomain: "ex3-panier.firebaseapp.com",
  databaseURL: "https://ex3-panier-default-rtdb.firebaseio.com",
  projectId: "ex3-panier",
  storageBucket: "ex3-panier.appspot.com",
  messagingSenderId: "110586098504",
  appId: "1:110586098504:web:d6c1fdd0d3a43d783bf97d"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;