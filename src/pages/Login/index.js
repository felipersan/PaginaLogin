import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../../assets/bgLogin.png'
import pcImage from '../../assets/pc.png'
import logo from '../../assets/logo.png'
import eye from '../../assets/visibility.png'
import noeye from '../../assets/novisibility.png'
import { LoginContext } from '../../contexts/login'

import {
  Background,
  AreaLogin,
  BgLogin,
  PcImage,
  Logo,
  Right,
  Left,
  LeftContainer,
  WelCome,
  AreaInput,
  Input,
  Button,
  AreaInputPassword,
  InputPassword,
  InputIcon,
  IconBtn
} from './styles'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useContext(LoginContext)

  async function handleUser() {
    if (!email) {
      alert('Digite um email')
      return
    } else if (!password) {
      alert('digite uma senha')
      return
    } else {
      setUser(email)
      navigate('../home', { replace: true })
    }
  }

  function handlePassword() {
    console.log('clicou')
    if (showPassword) {
      setShowPassword(false)
      return
    } else {
      setShowPassword(true)
      return
    }
  }

  return (
    <Background>
      <AreaLogin>
        <Left>
          <LeftContainer>
            <Logo src={logo} />
            <WelCome>
              Bem vindo ao <span style={{ color: '#ff6c22' }}>Painel</span>{' '}
            </WelCome>
            <AreaInput>
              <Input
                required
                type="email"
                placeholder={'Digite seu e-mail'}
                value={email}
                onChange={text => {
                  setEmail(text.target.value)
                }}
              />
              <AreaInputPassword>
                <InputPassword
                  type={showPassword ? 'password' : 'default'}
                  placeholder={'Digite sua senha'}
                  value={password}
                  onChange={text => {
                    setPassword(text.target.value)
                  }}
                />
                <IconBtn onClick={handlePassword}>
                  <InputIcon src={showPassword ? eye : noeye} />
                </IconBtn>
              </AreaInputPassword>

              <Button onClick={handleUser}>Acessar</Button>
            </AreaInput>
          </LeftContainer>
        </Left>
        <Right>
          <PcImage src={pcImage} />
          <BgLogin src={bgImage} />
        </Right>
      </AreaLogin>
    </Background>
  )
}
