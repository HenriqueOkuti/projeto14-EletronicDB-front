import {BrowserRouter, Routes, Route} from 'react-router-dom';
import home from './components/home/home';
import signIn from './components/signIn/signIn';
import signUp from './components/signUp/signUp'
import cart from './components/cart/cart';
import checkout from './components/checkout/checkout';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={home}/>
      <Route path='/sign-in' element={signIn}/>
      <Route path='/sign-up' element={signUp}/>
      <Route path='/checkout' element={checkout}/>
      <Route path='/cart' element={cart}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
