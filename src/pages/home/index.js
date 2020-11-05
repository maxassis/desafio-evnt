import React from "react";
import * as S from "./styles";
import logowhite from "../../components/assets/logo-white.jpg";

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
            <S.Input placeholder="Digite sua cidade"></S.Input>
            <S.Button>BUSCAR</S.Button>
          </div>
        </S.ContainerCentral>
      </S.Container>
    </>
  );
}

export default Home;
