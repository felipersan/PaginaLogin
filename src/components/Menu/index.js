import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Card from '../Card'
import { useNavigate } from 'react-router-dom'

import { Container, Logo, AreaMenu, Button } from './styles'

export default function Menu({ setPageAtual }) {
  const [inicio, setInicio] = useState(true)
  const [contatos, setContatos] = useState(false)
  const [relatorios, setRelarorios] = useState(false)
  const navigate = useNavigate()

  function handleInicio() {
    setInicio(true)
    setContatos(false)
    setRelarorios(false)
    setPageAtual('home')
    navigate("../home", { replace: true });
  }

  function handleContatos() {
    setContatos(true)
    setInicio(false)
    setRelarorios(false)
    setPageAtual('contatos')
    navigate("../Contato", { replace: true });

  }

  function handleRelatorios() {
    setRelarorios(true)
    setInicio(false)
    setContatos(false)
    setPageAtual('relatórios')
  }

  return (
    <Container>
      <Logo src={logo} />
      <AreaMenu>
        <Button onClick={handleInicio}>
          <Card click={inicio} name={'Início'} icon={'chart'} />
        </Button>
        <Button onClick={handleContatos}>
          <Card click={contatos} name={'Contatos'} icon={'document'} />
        </Button>
        <Button onClick={handleRelatorios}>
          <Card click={relatorios} name={'Relatórios'} icon={'trend'} />
        </Button>
      </AreaMenu>
    </Container>
  )
}
