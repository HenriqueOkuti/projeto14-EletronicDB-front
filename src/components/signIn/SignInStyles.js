import styled from 'styled-components';

export default function SignInstyledForm({children}){
    return(
        <Formstyled>
            {children}
        </Formstyled>
    );
};

const Formstyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    input{
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        margin-bottom: 5px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #7fbcd2;
        padding-left: 14px;
    }
    .play{
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #134d60;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        margin-bottom: 25px;
    }
    .link{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a{
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;  
        color: #134d60;
    }
`;
