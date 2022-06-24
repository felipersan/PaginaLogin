import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Relatórios from '../pages/Relatórios'
import Contato from '../pages/Contato'
import Blog from '../pages/Blog'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/relatórios" element={<Relatórios />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}
