import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './components/home/home';
import signIn from './components/signIn/signIn';
import signUp from './components/signUp/signUp';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Order from './components/order/order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={home} />
        <Route path='/sign-in' element={signIn} />
        <Route path='/sign-up' element={signUp} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
