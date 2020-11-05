import React from "react";
import Estabelecimentos from "../../components/estabelecimentos";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

import * as S from "./styles";

function Restaurantes() {
  return (
    <>
      <Header />
      <S.Container>
        <SideBar />
        <Estabelecimentos />
      </S.Container>
    </>
  );
}

export default Restaurantes;
