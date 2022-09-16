import { useContext } from "react";
import ContextUser from "../../Contexts/ContextUser";
import { Link } from 'react-router-dom';
import SignUpstyledForm from "./SignUpStyles";

export default function SignUpForm(){
    const {email, setEmail} = useContext(ContextUser);
    const {password, setPassword} = useContext(ContextUser);
    const {name, setName} = useContext(ContextUser);

    function handleForm(e){
        e.preventDefault();
    };
    /*
    function sucess(){
        alert("Cadastro realizado com sucesso, vá para tela de login para iniciar");

    }

    function error(){
        alert("Por favor preencha os campos novamente");
    }
    */
    function submit(){
        if (email !== ""  && password !== "" && name !== ""){
            const signUpUser = {
                email: email,
	            name: name,
	            password: password,
            };
            console.log(signUpUser);
            /*
            const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastro);
            request.then(()=> sucess());
            request.catch(()=> error());*/
        } else {
            alert("Por favor preencha os campos novamente");
        };
    };

    return(
        <SignUpstyledForm>
        <form onSubmit={handleForm}>
            <div className="inputs">
                <div className="input">
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} required  placeholder="email" />
                </div>
                <div className="input" >
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} required  placeholder="senha" />
                </div> 
                <div className="input" >
                    <input type="text" onChange={(e)=> setName(e.target.value)} required  placeholder="nome" />
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