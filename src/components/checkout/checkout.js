import {
  Background,
  CartContainer,
  DescriptionContainer,
  HeaderItem,
  HeaderOptions,
  InfoContainer,
  ItemContainer,
  ItemImage,
  LowerContainer,
  PageContainer,
  PageHeader,
  PriceContainer,
  QuantityContainer,
} from '../../shared/CartCheckoutStyles';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeButton } from './checkoutStyles';

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const order = {
    list: location.state?.list,
    value: location.state?.value,
  };

  console.log(order);

  return (
    <>
      <Background></Background>
      <PageContainer>
        <PageHeader>
          <HeaderOptions>
            <HeaderItem>
              <IoChevronBackOutline
                onClick={() => navigate('/cart')}
              ></IoChevronBackOutline>
            </HeaderItem>
            <HeaderItem>Checkout</HeaderItem>
          </HeaderOptions>
        </PageHeader>
        <CartContainer checkout={true}>
          {order.list.map((e, i) =>
            !e.hasOwnProperty('ignore') ? (
              <RenderProduct product={e} key={i} />
            ) : (
              ''
            )
          )}
        </CartContainer>
        <LowerContainer>
          <PriceContainer checkout={true}>
            <span>Total: </span>
            <span>R$ {order.value}</span>
          </PriceContainer>
          <HomeButton
            onClick={() => {
              //SEND TOKEN TOO!

              //IF TOKEN IS EMPTY REDIRECT TO LOGIN
              navigate('/order', { state: { order: order } });
            }}
          >
            Order
          </HomeButton>
        </LowerContainer>
      </PageContainer>
    </>
  );
}

function RenderProduct({ product }, key) {
  return (
    <ItemContainer checkout={true}>
      <ItemImage
        src={`${product.image}`}
        alt=''
        onClick={() => console.log('redirect to item')}
      ></ItemImage>
      <InfoContainer>
        <DescriptionContainer>{product.name}</DescriptionContainer>
        <DescriptionContainer>R$ {product.value}</DescriptionContainer>
        <QuantityContainer>
          <div>Quantity: {product.quantity}</div>
        </QuantityContainer>
      </InfoContainer>
    </ItemContainer>
  );
}
