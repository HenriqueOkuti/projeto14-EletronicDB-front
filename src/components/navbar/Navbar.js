import React, {useState} from 'react';
import {Container, Div} from './NavbarStyles';
import {FaBars, FaUser, FaCartPlus} from 'react-icons/fa'
import Sidebar from './sidebar/Sidebar';
import Perfil from './perfil/Perfil';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [perfil, setPerfil] = useState(false);

    const showSidebar = () => {
        if(perfil){
            setPerfil(false)
        }
        setSidebar(!sidebar);
    }
    const showPerfil = () => {
        if(sidebar){
            setSidebar(false)
        }
        setPerfil(!perfil);
    }

    return (
        <Container>
            <FaBars onClick={showSidebar}></FaBars>
            {sidebar && <Sidebar active={setSidebar}/>}
            <h3>EletronicDB</h3>
            <Div>
                <Link to={"/cart"}>
                    <FaCartPlus ></FaCartPlus>
                </Link>
                <FaUser onClick={showPerfil}></FaUser>
                {perfil && <Perfil active={setPerfil}/>}
            </Div>
        </Container>
    )
}

export default Navbar;