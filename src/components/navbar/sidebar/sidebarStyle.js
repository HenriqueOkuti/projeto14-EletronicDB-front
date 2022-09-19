import styled from 'styled-components';

export const Container = styled.div`
  background-color: #D9D9D9;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 18.75rem;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: black;
    width: 1.875rem;
    height: 1.875rem;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 18.75rem;
    }
  }
`;


export const Content = styled.div`
  margin-top: 6.25rem;
`;
