import { useContext } from "react";
import ContextUser from "../../Contexts/ContextUser";
import { Link } from "react-router-dom";
import SignInStyledForm from "./SignInStyles";

export default function FormSignin(){
    const {email, setEmail} = useContext(ContextUser);
    const {password, setPassword} = useContext(ContextUser);
    /*const  navigate = useNavigate();*/

    function handleForm(e){
        e.preventDefault();
    };
    /*
    function sucess(res){
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        navigate("/Home");
    };

    function error(){
        alert("Por favor preencha os campos novamente");
    }; 
    */
    function submit(){
        if (email !== ""  && password !== ""){
            const login = {
                email,
	            password
            };
            console.log(login);
            /*
            const request = axios.post("http://localhost:5000/sign-in", login);
            request.then((res)=> sucess(res));
            request.catch(()=> error());*/
        } else {
            alert("Por favor preencha os campos novamente");
        };
    };

    return (
    <SignInStyledForm>
    <form onSubmit={handleForm}>
        <div className="inputs">
        <div className="input">
            <input type="email" onChange={(e)=> setEmail(e.target.value)} required  placeholder="E-mail" />
        </div>
        <div className="input" >
            <input type="password" onChange={(e)=> setPassword(e.target.value)} required  placeholder="Senha" />
        </div>  
        </div>
        <div>
        <div className="play" onClick={()=> submit()}>
            Fazer Login
        </div>
        <div className="link">
            <Link to={"/Sign-up"}>
                Primeira vez? Cadastre-se!
            </Link>
        </div>
        </div>
	</form>
    </SignInStyledForm>
    );
};