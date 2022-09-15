import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import ContextUser from './Contexts/ContextUser';
import Home from './components/home/Home';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp'
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
  <ContextUser.Provider value={{email, setEmail, password, setPassword, name, setName}}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
  </ContextUser.Provider>
  );
};

export default App;
