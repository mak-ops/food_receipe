import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQheySSOdel3UpDTtccfu3sjMRaeqX90Q",
  authDomain: "food-recipe-ea28f.firebaseapp.com",
  projectId: "food-recipe-ea28f",
  storageBucket: "food-recipe-ea28f.appspot.com",
  messagingSenderId: "1089540413225",
  appId: "1:1089540413225:web:d7d777625f9c821bcd4938",
  measurementId: "G-QJ0LGGZNRZ"
};

const app = initializeApp(firebaseConfig);

export default app;