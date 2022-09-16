import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: #e1ffee;
  box-sizing: border-box;
  overflow-y: auto;
`;

const CartImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 120px;
  color: #979797;
  margin: 80px 0 20px 0;
`;

const HomeButton = styled.button`
  margin: 0 0 0 0;
  border-radius: 5px;
  width: ${(props) => (props.hasItems ? '90vw' : '60vw')};
  height: ${(props) => (props.hasItems ? '65px' : '45px')};
  font-size: 20px;
  color: #ffffff;
  background-color: #7fbcd2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyText = styled.div`
  font-size: 26px;
  text-align: center;
  width: 250px;
  margin: 30px 0 30px 0;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartContainer = styled.div`
  margin: 20px 0 0 0;
  width: 90vw;
  height: 60vh;
  overflow-y: scroll;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceContainer = styled.div`
  margin: 10px 0 10px 0;
  height: 45px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-items: center;
  background-color: #a5f1e9;
  border-radius: 5px;
  font-size: 22px;
`;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px 0;
  width: 90vw;
  bottom: 80px;
`;

const PageHeader = styled.div`
  margin: 40px 0 0 0;
  font-size: 24px;
  width: 100%;
`;

const HeaderOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const HeaderItem = styled.div``;

const ItemContainer = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  min-height: 110px;
  width: 95%;
  color: #979797;
  background-color: #ffeeaf;
  border-radius: 5px;
`;

const ItemImage = styled.img`
  margin: 11px 0 0 12px;
  height: 90px;
  width: 90px;
`;

const InfoContainer = styled.div`
  margin: 0px 0 5px 5px;
  width: 350px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const CancelItem = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  font-size: 40px;
  margin: 0 10px 0 0;
`;

const QuantityContainer = styled.div`
  margin: 0 0 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;

const DescriptionContainer = styled.div`
  margin: 0 0 0 10px;
`;

const PromptBackground = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  overflow-y: auto;
`;

const DeletePrompt = styled.div`
  position: fixed;
  top: 20%;
  z-index: 2;
  width: 50vw;
  height: auto;
  background-color: #f6f6f6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 10px 0;
`;

const DeleteText = styled.div`
  margin: 18px 0 0 0;
  font-size: 18px;
`;

const DeleteItem = styled.div`
  display: flex;
  margin: 10px 0 0 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
`;

const DeleteButtons = styled.div`
  display: flex;
  margin: 30px 0 0 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  font-size: 25px;
  text-align: center;
`;

const ButtonColor = styled.div`
  font-size: 50px;
  color: ${(props) => (props.status ? '#007900' : '#F70000')};
`;

const ItemName = styled.div`
  text-align: center;
`;

export {
  Background,
  CartImage,
  HomeButton,
  PageContainer,
  CartContainer,
  PriceContainer,
  LowerContainer,
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
};
