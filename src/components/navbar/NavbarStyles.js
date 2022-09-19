import styled from 'styled-components';

export const Container = styled.div`
    height: 5rem;
    width:100%;
    display: flex;
    background-color: #D9D9D9;
    box-shadow: 0 0 1.25rem 0.188rem;
    position: fixed;
    top:0;
    left:0;
    
    
    >svg{
        position:absolute;
        color: black;
        width: 1rem;
        height:1rem;
        margin-top: 1.625rem;
        margin-left: 2rem;
        cursor: pointer;
    }

    >h3{
        color: black;
        font-size: 1.4rem;
        font-weight: bold;
        margin-top: 1.625rem;
        margin-left: auto;
        margin-right: auto;
        align-items:center;
        font-family: 'Saira Stencil One', cursive;
    }

`

export const Div = styled.div`
        position:absolute;
        display: flex;
        color: black;
        align-items:center;
        margin-top: 1.625rem;
        right: 2rem;

    svg{
        width: 1rem;
        height:1rem;
        cursor: pointer;
        margin-left:2rem;
    }

    a{
        text-decoration: none;
        color:black;
    }
`
