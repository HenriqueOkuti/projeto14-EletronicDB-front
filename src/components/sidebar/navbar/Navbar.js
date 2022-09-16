import React, {useState} from 'react';
import {Container} from './NavbarStyles';
import {FaBars} from 'react-icons/fa'
import Sidebar from '../Sidebar';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Container>
            <FaBars onClick={showSidebar}></FaBars>
            {sidebar && <Sidebar active={setSidebar}/>}
        </Container>
    )
}

export default Navbar;