import SignUpForm from "./SignUpForm"; 
import styled from "styled-components";

export default function SignUp(){
    return(
    <AllStyleSignUp>
        <div className="Logo">
            eletronicDB
        </div>
        <SignUpForm/>
    </AllStyleSignUp>
    );
};

const AllStyleSignUp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Logo{
        margin: 50px 0 30px 0;
        font-size: 35px;
        color: #ff6e00;
    };
`;