import React, { useContext, useState } from 'react'
import { LoginContext } from '../../contexts/login'
import ToLogin from '../../components/ToLogin'
import Card from '../../components/Card'
import Post from '../../components/Post'
import Menu from '../../components/Menu'
import Contato from '../../pages/Contato'
import Relatorios from '../../pages/Relatórios'

import logo from '../../assets/logo.png'

import {
  Background,
  Posts,
  Logo,
  Button,
  AreaMenu,
  Header,
  Component,
  UserEmail,
  ArePosts
} from './styles'

export default function Home() {
  const { user } = useContext(LoginContext)
  const [page, setPage] = useState('home')

  if (!user) {
    return <ToLogin />
  }

  console.log(page)

  if (page === 'home') {
    return (
      <Background>
        <Menu
          setPageAtual={page => {
            setPage(page)
          }}
        />
        <Posts>
          <Header>
            <UserEmail>
              Ola <span style={{ fontWeight: 'bold' }}>{user}</span>
            </UserEmail>
            <Component />
          </Header>
          <ArePosts>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </ArePosts>
        </Posts>
      </Background>
    )
  } else if (page === 'contatos') {
    return (
      <Background>
        <Menu
          setPageAtual={page => {
            setPage(page)
          }}
        />
        <Posts>
          <Header>
            <UserEmail>
              Ola <span style={{ fontWeight: 'bold' }}>{user}</span>
            </UserEmail>
            <Component />
          </Header>
          <Contato />
        </Posts>
      </Background>
    )
  } else if (page === 'relatorios') {
    return (
      <Background>
        <Menu
          setPageAtual={page => {
            setPage(page)
          }}
        />
        <Posts>
          <Header>
            <UserEmail>
              Ola <span style={{ fontWeight: 'bold' }}>{user}</span>
            </UserEmail>
            <Component />
          </Header>
          <Relatorios />
        </Posts>
      </Background>
    )
  }
}
