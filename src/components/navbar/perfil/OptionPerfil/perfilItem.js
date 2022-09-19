import React from 'react'
import{Link} from 'react-router-dom';
import { Container } from './PerfilItemStyles'


const PerfilItem = ({ path, Text, closePerfil }) => {
  return (
    <Link to={path}>
      <Container onClick={closePerfil}>
        {Text}
      </Container>
    </Link>
  )
}

export default PerfilItem;