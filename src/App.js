import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/home';
import SignIn from './components/signIn/signIn';
import SignUp from './components/signUp/signUp'
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Navbar from './components/sidebar/navbar/Navbar'

import "./shared/reset.css";
import './App.css'


function App() {
  return (
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
  );
}

export default App;
