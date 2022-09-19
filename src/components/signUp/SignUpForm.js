import { useContext } from "react";
import ContextUser from "../../Contexts/ContextUser";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import SignUpstyledForm from "./SignUpStyles";
import axios from 'axios';

export default function SignUpForm(){
    const {email, setEmail} = useContext(ContextUser);
    const {password, setPassword} = useContext(ContextUser);
    const {name, setName} = useContext(ContextUser);
    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
    };

    function sucess(){
        alert("Cadastro realizado com sucesso, você será direcionado para tela de login");
        navigate('/sign-in');
    };

    function error(){
        alert("Por favor preencha os campos novamente");
    };

    function submit(){
        if (email !== ""  && password !== "" && name !== ""){
            const signUpUser = {
                email: email,
	            name: name,
	            password: password,
            };
            const request = axios.post("https://eletronicdb.herokuapp.com/sign-up", signUpUser);
            request.then(()=> sucess());
            request.catch(()=> error());
        } else {
            alert("Por favor preencha os campos novamente");
        };
    };

    return(
        <SignUpstyledForm>
        <form onSubmit={handleForm}>
            <div className="inputs">
                <div className="input" >
                    <input type="text" onChange={(e)=> setName(e.target.value)} required  placeholder="nome" />
                </div> 
                <div className="input">
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} required  placeholder="email" />
                </div>
                <div className="input" >
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} required  placeholder="senha" />
                </div> 
                </div>
            <div>
                <div className="play" onClick={()=> submit()}>
                    cadastre-se
                </div>
                <div className="link">
                    <Link to={"/sign-in"}>
                        Já tem uma conta? Faça login!
                    </Link>
                </div>
            </div>
	    </form>
        </SignUpstyledForm>
    );
};