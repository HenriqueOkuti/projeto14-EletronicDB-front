import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './components/home/home';
import signIn from './components/signIn/signIn';
import signUp from './components/signUp/signUp';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import React,{useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp'
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Navbar from './components/sidebar/navbar/Navbar'
import ContextUser from './Contexts/ContextUser';

import "./shared/reset.css";
import './App.css'


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
  <ContextUser.Provider value={{email, setEmail, password, setPassword, name, setName}}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/produtos/type1' element={<Cart/>}/>
        <Route path='/produtos/type2' element={<Cart/>}/>
        <Route path='/produtos/type3' element={<Cart/>}/>
        <Route path='/produtos/type4' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  </ContextUser.Provider>
  );
};

export default App;
