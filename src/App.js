import React, {useEffect, createContext, useState} from 'react';
import './components/style.css';
import Meal from './components/Meal';
import Recipe from './components/Recipe';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Login from './components/Login';
// import Signup from './components/Sigup';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import app from "./components/firebaseConfig";
import {getAuth, onAuthStateChanged} from 'firebase/auth';

export const UserContext=createContext({});

function App() {
  const auth=getAuth(app);
  const[authenticatedUser,setAuthenticatedUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
      
        setAuthenticatedUser(user);
      }else{
        setAuthenticatedUser(null);
      }
    })
  },[auth])

  return (
   <BrowserRouter value={authenticatedUser}>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contactus" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      {/* <Route path="/Signup" element={<Signup/>}/> */}
      <Route  path="/Meal" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;