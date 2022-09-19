import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SpinnerContainer } from '../order/orderStyles';
import { TailSpin } from 'react-loader-spinner';
import {
  EmptyText,
  ItemContainer,
  PageContainer,
  ItemImage,
  InfoContainer,
  DescriptionContainer,
} from '../../shared/CartCheckoutStyles';
import { FaCartPlus } from 'react-icons/fa';
import { TypeContainer, CancelItemMod } from './HomeStyles';
export default function Home() {
  const [product, setProduct] = useState('');
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');


  const { type } = useParams();


  if (type) {
    setProduct(type);
  }

  useEffect(() => {
    const requisicao = axios.get('https://eletronicdb.herokuapp.com/mongo');

    requisicao.then((res) => {
      setItems(res.data.slice(1, 200));
    });
    requisicao.catch((event) => console.log(event));
  }, [product]);

  if (!items[0]) {
    return (
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
        <EmptyText>Loading products...</EmptyText>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <RenderCategories allProducts={items} />
      </PageContainer>
    );
  }
}


function RenderCategories({ allProducts }) {
  const lengthAll = allProducts.length;
  const CONST_20 = 20;
  const latestProducts = allProducts.slice(lengthAll - CONST_20);
  const organizedList = sortTypes(allProducts);
  console.log(organizedList);


  return (
    <>
      <div></div>
      <RenderLatest />
      {organizedList.map((e) => (
        <RenderType productsType={e} />
      ))}
    </>
  );
}

function sortTypes(list) {
  const obj = {};
  for (let i = 0; i < list.length; i++) {
    obj[list[i].type] = [];
  }
  list.filter((e) => obj[e.type].push(e));
  const array = [];
  for (const type in obj) {
    array.push([]);
  }
  for (let i = 1; i < array.length + 1; i++) {
    array[i - 1] = obj[i];
  }
  return array;
}

function RenderLatest(latestProducts) {
  return <></>;
}

function RenderType({ productsType }) {
  console.log(productsType);
  const LIMIT = 5;
  const productsToRender = productsType.filter((e, i) => (i < LIMIT ? e : 0));
  return (
    <>
      <TypeContainer>
        Produtos tipo {productsType[0].type}
        <RenderItems items={productsToRender} />
      </TypeContainer>
    </>
  );
}

function RenderItems({ items }) {
  console.log(items);
  return (
    <>
      <div></div>
      {items.map((e, i) => (
        <RenderItem key={i} product={e} />
      ))}
    </>
  );
}

function RenderItem({ product }) {
  const token = localStorage.getItem('token');
  return (
    <>
      <ItemContainer>
        <ItemImage
          src={`${product.image_main}`}
          alt=''
          onClick={() => console.log('redirect to item')}
        ></ItemImage>
        <InfoContainer>
          <DescriptionContainer>{product.name}</DescriptionContainer>
          <DescriptionContainer>R$ {product.value}</DescriptionContainer>
        </InfoContainer>
        <CancelItemMod>
          <FaCartPlus
            onClick={() => {
              if (!token) {
                window.alert('Faça login para adicionar ao carrinho');
              } else {
                console.log('add to cart: ', { ...product, quantity: 1 });
              }
            }}
          />
        </CancelItemMod>
      </ItemContainer>
    </>
  );
}
