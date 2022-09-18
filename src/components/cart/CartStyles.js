import styled from 'styled-components';

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
  height: ${(props) => (props.hasItems ? '50px' : '45px')};
  font-size: 20px;
  color: #ffffff;
  background-color: #ff6e00;
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

const CancelItem = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  font-size: 40px;
  margin: 0 10px 0 0;
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
  CartImage,
  HomeButton,
  EmptyText,
  CancelItem,
  PromptBackground,
  DeletePrompt,
  DeleteText,
  DeleteItem,
  DeleteButtons,
  ButtonColor,
  ItemName,
};
