import React from "react";
import * as S from "./styles";
import LogoRed from "../assets/logo-red.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

function Header() {
  return (
    <>
      <S.Container>
        <div>
          <S.Logo src={LogoRed} alt="logo vermelho" />
        </div>
        <div>
          <FaMapMarkerAlt
            style={{
              marginLeft: "1.2rem",
              marginTop: "0.5rem",
              position: "absolute",
              width: "13px",
              color: "#767676",
            }}
            color="#767676"
            size="1.5em"
          />
          <S.Inpt placeholder="Digite a sua cidade"></S.Inpt>
          <S.Btn>BUSCAR</S.Btn>
        </div>
      </S.Container>
    </>
  );
}

export default Header;
