import React, {useContext} from 'react';
import { LoginContext } from '../../contexts/login'

import {Container, Element, Name, } from './styles'

export default function Header() {
  const { user } = useContext(LoginContext)
 return (
   <Container>
        <Name>Olá <span  style={{fontWeight: 600}} >{user}</span></Name>
        <Element/>
        
   </Container>
 );
}