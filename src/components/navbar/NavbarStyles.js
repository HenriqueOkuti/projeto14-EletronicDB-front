import styled from 'styled-components';

export const Container = styled.div`
    height: 5rem;
    display: flex;
    background-color: #D9D9D9;
    box-shadow: 0 0 1.25rem 0.188rem;

    >svg{
        position:fixed;
        color: black;
        width: 1.8rem;
        height:1.8rem;
        margin-top: 1.625rem;
        margin-left: 2rem;
        cursor: pointer;
    }

    >h3{
        color: black;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Times New Roman', Times, serif;
        margin-top: 1.625rem;
        margin-left: auto;
        margin-right: auto;
        justify-content:space-around;
        align-items:center;
    }

`

export const Div = styled.div`
        position:fixed;
        display: flex;
        color: black;
        align-items:center;
        margin-top: 1.625rem;
        right: 2rem;

    svg{
        width: 1.8rem;
        height:1.8rem;
        cursor: pointer;
        margin-left:2rem;
    }

    a{
        text-decoration: none;
        color:black;
    }
`
