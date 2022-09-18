import styled from 'styled-components';

const HomeButton = styled.button`
  margin: 0 0 0 0;
  border-radius: 5px;
  width: 90%;
  height: ${(props) => (props.hasItems ? '65px' : '45px')};
  font-size: 20px;
  color: #ffffff;
  background-color: #ff6e00;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityContainer = styled.div`
  margin: 0 0 0 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

export { HomeButton, QuantityContainer };
