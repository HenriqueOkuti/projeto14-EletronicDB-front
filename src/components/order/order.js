import { useState } from 'react';
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

  const order = location.state?.order;

  console.log(order);

  if (placed) {
    //insert into DB

    //clean cart

    //Then go back home
    navigate('/');
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
