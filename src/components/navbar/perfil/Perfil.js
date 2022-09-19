import React from 'react'
import { Container, Content} from './PerfilStyles'
import { FaUser } from 'react-icons/fa'


import PerfilItem from './OptionPerfil/perfilItem'

const Perfil = ({ active, online, setOnline }) => {
    
    const closePerfil = () => {
      if(online){
        setOnline(false);
        localStorage.removeItem('token');
        window.location.reload()
      }

    }


  return (
    <Container perfil={active}> 
        <FaUser onClick={()=>active(false)}/>  
      <Content>
        {online ? <PerfilItem path={"/"} Text="Log Out" closePerfil={closePerfil}/>:
        <>
        <PerfilItem path={"/sign-in"} Text="Sign In" closePerfil={closePerfil}/>
        <PerfilItem path={"/Sign-up"} Text="Sign Up" closePerfil={closePerfil} />
        </>
        }
      </Content>
    </Container>
)
}

export default Perfil;