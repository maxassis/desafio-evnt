import React from "react";
import * as S from "./styles";
import LogoRed from "../assets/logo-red.jpg";

function Header() {
  return (
    <>
      <S.Container>
        <div>
          <S.Logo src={LogoRed} alt="logo vermelho" />
        </div>
        <div>
          <S.Inpt placeholder="Digite sua cidade"></S.Inpt>
          <S.Btn>BUSCAR</S.Btn>
        </div>
      </S.Container>
    </>
  );
}

export default Header;
