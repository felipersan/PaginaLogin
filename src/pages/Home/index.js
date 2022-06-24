import React, { useContext, useState } from "react";
import { LoginContext } from "../../contexts/login";
import ToLogin from "../../components/ToLogin";
import Menu from "../../components/Menu";
import Contato from "../../pages/Contato";
import Relatorios from "../../pages/Relatórios";
import Blog from "../Blog";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

import { Background, Posts, AreaPage } from "./styles";

  export default function Home() {
  const { user } = useContext(LoginContext);
  const [page, setPage] = useState();
 

  let location = useLocation();
  console.log(location.pathname)
  
  if (!user) {
    return <ToLogin />;
  }

  

  return (
    <Background>
      <Menu
        setPageAtual={(page) => {
          setPage(page);
        }}
      />
      <Posts>
        <Header />
        <AreaPage>
          {location.pathname === "home" && <Blog />}
          {location.pathname === "contatos" && <Contato />}
          {location.pathname === "relatórios" && <Relatorios />}
        </AreaPage>
      </Posts>
    </Background>
  );
}
