import React from 'react'
import { Background, Text, Button } from './styles'
import { useNavigate } from 'react-router-dom'

export default function ToLogin() {
  const navigate = useNavigate()

  function handleLogin() {
    navigate('/home', { replace: true })
  }

  return (
    <Background>
      <Text>Página de Contato</Text>
    </Background>
  )
}
