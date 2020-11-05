import React from "react";
import * as S from "./styles";
import logowhite from "../../components/assets/logo-white.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <S.Container>
        <S.Logo>
          <S.Logowht src={logowhite} />
        </S.Logo>
        <S.ContainerCentral>
          <div>
            <S.Texto>
              Descubra os melhores
              <br /> restaurantes em sua cidade
            </S.Texto>
          </div>
          <div>
            <FaMapMarkerAlt
              style={{
                marginLeft: "1.2rem",
                marginTop: "2.7rem",
                position: "absolute",
                width: "16px",
                color: "#767676",
              }}
              color="#767676"
              size="1.5em"
            />
            <S.Input placeholder="Digite sua cidade"></S.Input>
            <S.Button>BUSCAR</S.Button>
          </div>
        </S.ContainerCentral>
      </S.Container>
    </>
  );
}

export default Home;
