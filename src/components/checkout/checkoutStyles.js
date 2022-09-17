import styled from 'styled-components';

const HomeButton = styled.button`
  margin: 0 0 0 0;
  border-radius: 5px;
  width: 78%;
  height: ${(props) => (props.hasItems ? '65px' : '45px')};
  font-size: 20px;
  color: #ffffff;
  background-color: #7fbcd2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { HomeButton };
