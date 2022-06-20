import React from 'react'
import { Background, Text, Button } from './styles'
import { useNavigate } from 'react-router-dom'

export default function ToLogin() {
  const navigate = useNavigate()

  function handleLogin() {
    navigate('../', { replace: true })
  }

  return (
    <Background>
      <Text>
        Ops, parece que você não está logado... faça login para acessar...
      </Text>
      <Button onClick={handleLogin}>Voltar e Fazer Login</Button>
    </Background>
  )
}
