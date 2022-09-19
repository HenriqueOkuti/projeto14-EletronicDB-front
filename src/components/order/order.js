import axios from 'axios';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Background,
  EmptyText,
  PageContainer,
} from '../../shared/CartCheckoutStyles';
import { SpinnerContainer } from './orderStyles';

export default function Order() {
  const [placed, setPlaced] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');

  const order = location.state?.order;
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      body: order.list,
    };
    axios
      .post('https://eletronicdb.herokuapp.com/checkout', config.body, config)
      .then(() => setPlaced(!placed))
      .catch(() => navigate('/checkout'));
  }, []);

  if (placed) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      body: [],
    };
    axios
      .put('https://eletronicdb.herokuapp.com/cart', config.body, config)
      .then(() => navigate('/'))
      .catch((event) => console.log(event));
  } else {
    return (
      <>
        <Background></Background>
        <PageContainer>
          <SpinnerContainer>
            <TailSpin
              height='80'
              width='80'
              color='#4fa94d'
              ariaLabel='tail-spin-loading'
              radius='1'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
            />
          </SpinnerContainer>
          <EmptyText>Placing your order...</EmptyText>
        </PageContainer>
      </>
    );
  }
}
