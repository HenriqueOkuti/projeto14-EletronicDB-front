import styled from 'styled-components';

export const Container = styled.div`
  background-color: #D9D9D9;
  border-bottom-left-radius:10px;
  position: fixed;
  width: 18.75rem;
  top: 0;
  right: 0;
  width: 18.75rem;
  right: ${props => props.perfil ? '0' : '-100%'};
  animation: showPerfil .500ms;
  @keyframes showPerfil {
    from {
      opacity: 0;
      height: 0;
    }
    to {
      opacity: 1;
      height: 12%;
    }
    }
    > svg {
    position: fixed;
    color: black;
    width: 1.875rem;
    height: 1.875rem;
    margin-top: 2rem;
    right: 2rem;
    cursor: pointer;
  }
`;


export const Content = styled.div`
  margin-top: 6.25rem;
`;