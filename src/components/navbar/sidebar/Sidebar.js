import React from 'react'
import { Container, Content} from './sidebarStyle'
import { FaTimes } from 'react-icons/fa'

import SidebarItem from './OptionSidebar/SidebarOption'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem path={"/"} Text="Home" closeSidebar={closeSidebar}/>
        <SidebarItem path={"/produtos/type1"} Text="Type 1" closeSidebar={closeSidebar}/>
        <SidebarItem path={"/produtos/type2"} Text="Type 2" closeSidebar={closeSidebar}/>
        <SidebarItem path={"/produtos/type3"} Text="Type 3" closeSidebar={closeSidebar}/>
        <SidebarItem path={"/produtos/type4"} Text="Type 4" closeSidebar={closeSidebar}/>
      </Content>
    </Container>
)
}

export default Sidebar