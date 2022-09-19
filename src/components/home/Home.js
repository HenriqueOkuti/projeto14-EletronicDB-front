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
  const [pageType, setPageType] = useState('');
  const params = useParams();

  let type = params;
  
  useEffect(() => {
    if (type) {
      setPageType(type.type);
      setProduct(type.type);
    }
  }, [type]);

  useEffect(() => {
    const requisicao = axios.get('https://eletronicdb.herokuapp.com/mongo');

    requisicao.then((res) => {
      setItems(res.data.slice(1, 200));
      
    });
    requisicao.catch((event) => console.log(event));
  }, [product, items, pageType]);

  if (pageType) {
    const TypeNumber = pageType
      .split('')
      .filter((e) => (Number(e) ? Number(e) : ''))
      .join('');

    const newitems = items.filter((e) => (e.type === TypeNumber ? e : ''));
    return (
      <PageContainer>
        <RenderCategories allProducts={newitems} />
      </PageContainer>
    );
  }

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
  const CONST_50 = 50;
  const latestProducts = allProducts.slice(lengthAll - CONST_20);
  const shouldRenderNew = lengthAll < CONST_50 ? false : true;
  const organizedList = sortTypes(allProducts);
  return (
    <>
      <div></div>
      {shouldRenderNew ? <RenderLatest latestProducts={latestProducts} /> : ''}
      {organizedList.map((e, index) => (
        <RenderType key={index} productsType={e} shouldHaveLimit={shouldRenderNew} />
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

function RenderLatest({ latestProducts }) {
  const LIMIT = 5;
  const productsToRender = latestProducts.filter((e, i) => (i < LIMIT ? e : 0));
  return (
    <>
      <TypeContainer>
        Newest products
        <RenderItems items={productsToRender} />
      </TypeContainer>
    </>
  );
}

function RenderType({ productsType, shouldHaveLimit }) {
  const LIMIT = shouldHaveLimit ? 5 : productsType.length;
  const productsToRender = productsType.filter((e, i) => (i < LIMIT ? e : 0));
  return (
    <>
      <TypeContainer>
        Products Type {productsType[0].type}
        <RenderItems items={productsToRender} />
      </TypeContainer>
    </>
  );
}

function RenderItems({ items }) {
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
                handleAddToCart({ ...product, quantity: 1 });
              }
            }}
          />
        </CancelItemMod>
      </ItemContainer>
    </>
  );
}

function handleAddToCart(product) {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    body: product,
  };
  axios
    .post('https://eletronicdb.herokuapp.com/cart', config.body, config)
    .then(() => window.alert('Item added to cart'))
    .catch(() => window.alert('Could not add item to cart'));
}
