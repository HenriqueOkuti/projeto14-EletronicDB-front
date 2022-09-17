import {
  Background,
  CartContainer,
  CartImage,
  HomeButton,
  LowerContainer,
  PageContainer,
  PriceContainer,
  EmptyText,
  PageHeader,
  HeaderOptions,
  HeaderItem,
  ItemContainer,
  ItemImage,
  InfoContainer,
  CancelItem,
  QuantityContainer,
  DescriptionContainer,
  PromptBackground,
  DeletePrompt,
  DeleteText,
  DeleteItem,
  DeleteButtons,
  ButtonColor,
  ItemName,
} from './CartStyles';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { IoChevronBackOutline } from 'react-icons/io5';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import { HiCheck, HiX } from 'react-icons/hi';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Cart() {
  const [showprompt, setShowprompt] = useState([false]);
  let [userProducts, setUserProducts] = useState(generateData());
  const [total, setTotal] = useState(0);
  const [update, setUpdate] = useState(false);
  const [hasItems, setHasItems] = useState(false);

  //plug axios here:
  function getUserData() {
    //  handleFailure()
    handleSuccess();
  }

  function handleSuccess(event) {
    setUserProducts(generateData);
    setHasItems(!userProducts[0] ? true : searchIgnore());
    setTotal(calculateTotal(userProducts));
  }

  function searchIgnore() {
    let numberItems = 0;
    for (let i = 0; i < userProducts.length; i++) {
      if (!userProducts[i].hasOwnProperty('ignore')) {
        numberItems++;
      }
    }

    if (numberItems !== 0) {
      return false;
    }
    return true;
  }

  function handleFailure(event) {
    console.log('Error ocurred when getting user order');
    console.log(event);
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    setHasItems(searchIgnore());
    setTotal(calculateTotal(userProducts));
  }, [update, userProducts]);

  if (!hasItems) {
    return (
      <>
        <Background></Background>
        <PageContainer>
          <PageHeader>
            <HeaderOptions>
              <HeaderItem>
                <IoChevronBackOutline
                  onClick={() => console.log('navigate HOME')}
                ></IoChevronBackOutline>
              </HeaderItem>
              <HeaderItem center={true}>Cart</HeaderItem>
              <HeaderItem>
                <FiTrash
                  onClick={() => handleCart(userProducts, setUpdate, update)}
                ></FiTrash>
              </HeaderItem>
            </HeaderOptions>
          </PageHeader>
          {showprompt[0] ? (
            <>
              {promptDelete(
                showprompt[1],
                userProducts,
                setShowprompt,
                setUserProducts
              )}
            </>
          ) : (
            ''
          )}
          <CartContainer>
            {userProducts.map((e, i) =>
              !e.hasOwnProperty('ignore') ? (
                <RenderProduct
                  product={e}
                  key={i}
                  setShowprompt={setShowprompt}
                  setUpdate={setUpdate}
                  update={update}
                />
              ) : (
                ''
              )
            )}
          </CartContainer>
          <LowerContainer>
            <PriceContainer>
              <span>Total:</span>
              <span>R$ {total}</span>
            </PriceContainer>
            <HomeButton
              hasItems={true}
              onClick={() => {
                console.log('Redirect CHECKOUT');
                console.log(
                  userProducts.filter((e) =>
                    e.hasOwnProperty('ignore') ? 0 : e
                  )
                );
              }}
            >
              Checkout
            </HomeButton>
          </LowerContainer>
        </PageContainer>
      </>
    );
  } else {
    return (
      <>
        <Background></Background>
        <PageContainer>
          <PageHeader>
            <HeaderOptions>
              <HeaderItem></HeaderItem>
              <HeaderItem center={true}>Cart</HeaderItem>
              <HeaderItem></HeaderItem>
            </HeaderOptions>
          </PageHeader>
          <CartImage>
            <MdOutlineRemoveShoppingCart></MdOutlineRemoveShoppingCart>
          </CartImage>
          <EmptyText>Oops! Your cart is empty!</EmptyText>
          <LowerContainer>
            <HomeButton
              onClick={() => {
                console.log('Redirect HOME');
              }}
            >
              Home
            </HomeButton>
          </LowerContainer>
        </PageContainer>
      </>
    );
  }
}

function generateData() {
  const arrayNewProducts = [];
  const product = {
    name: 'product name',
    value: 0,
    quantity: 1,
    image:
      'https://akamai.sscdn.co/uploadfile/letras/albuns/1/9/c/6/1222351641226663.jpg',
  };

  const GENERATED_ITEMS = 5;
  for (let i = 0; i < GENERATED_ITEMS; i++) {
    const randomNumber = Math.random() * (100 - 50) + 50;
    const newProduct = {
      ...product,
      value: randomNumber.toFixed(2),
      name: product.name + ` ${Math.round(randomNumber)}`,
      id: i,
    };
    arrayNewProducts.push(newProduct);
  }

  return arrayNewProducts;
}

function RenderProduct({ product, key, setShowprompt, setUpdate, update }) {
  let [quantity, setQuantity] = useState(product.quantity);
  product.quantity = quantity;

  return (
    <ItemContainer>
      <ItemImage
        src={`${product.image}`}
        alt=''
        onClick={() => console.log('redirect to item')}
      ></ItemImage>
      <InfoContainer>
        <DescriptionContainer>{product.name}</DescriptionContainer>
        <DescriptionContainer>R$ {product.value}</DescriptionContainer>
        <QuantityContainer>
          <AiOutlineMinus
            onClick={() => {
              if (product.quantity >= 2) {
                setQuantity(--quantity);
                setUpdate(!update);
              }
            }}
          ></AiOutlineMinus>
          <div>{product.quantity}</div>
          <AiOutlinePlus
            onClick={() => {
              setQuantity(++quantity);
              setUpdate(!update);
            }}
          ></AiOutlinePlus>
        </QuantityContainer>
      </InfoContainer>
      <CancelItem>
        <TiDelete
          onClick={() => handleDelete(product, setShowprompt)}
        ></TiDelete>
      </CancelItem>
    </ItemContainer>
  );
}

function handleDelete(product, setShowprompt) {
  setShowprompt([true, product]);
}

let indexItem;
let correctQuantity;

function promptDelete(product, userProducts, setShowprompt, setUserProducts) {
  indexItem = userProducts.indexOf(product) + 1;
  correctQuantity =
    indexItem === userProducts.length
      ? userProducts[indexItem - 1].quantity
      : userProducts[indexItem].quantity;

  return (
    <>
      <PromptBackground></PromptBackground>
      <DeletePrompt>
        <DeleteText>Do you wish to remove</DeleteText>
        <DeleteItem>
          <ItemImage src={product.image} alt='' />
          <ItemName>{product.name}</ItemName>
        </DeleteItem>
        <DeleteButtons>
          <ButtonColor status={false}>
            <HiX
              onClick={() =>
                returnInitial(product, userProducts, setShowprompt)
              }
            ></HiX>
          </ButtonColor>
          <ButtonColor status={true}>
            <HiCheck
              onClick={() => {
                removeItem(
                  product,
                  userProducts,
                  setShowprompt,
                  setUserProducts,
                  correctQuantity,
                  indexItem
                );
              }}
            ></HiCheck>
          </ButtonColor>
        </DeleteButtons>
      </DeletePrompt>
    </>
  );
}

function removeItem(product, userProducts, setShowprompt, setUserProducts) {
  product['ignore'] = true;
  const newUserProducts = [...userProducts, product];

  setUserProducts(newUserProducts);
  setShowprompt(false);
}

function returnInitial(product, userProducts, setShowprompt) {
  if (product.quantity > 0) {
    setShowprompt(false);
    return;
  }
}

function calculateTotal(products) {
  let balance = 0;
  for (let i = 0; i < products.length; i++) {
    if (!products[i].hasOwnProperty('ignore')) {
      balance += Number(products[i].value) * Number(products[i].quantity);
    }
  }
  return balance.toFixed(2);
}

function handleCart(products, setUpdate, update) {
  for (let i = 0; i < products.length; i++) {
    if (!products[i].hasOwnProperty('ignore')) {
      products[i]['ignore'] = true;
    }
  }
  setUpdate(!update);
}
