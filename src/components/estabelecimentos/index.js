import React from "react";
import * as S from "./styles";
import pizza from "../assets/pizza.webp";
import { FaStar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

function Estabelecimentos() {
  return (
    <>
      <S.Container>
        <S.HeaderLocal>
          <S.Local>Restaurantes em Rio de Janeiro</S.Local>
        </S.HeaderLocal>
        <S.GridProdutos>
          <S.Produto>
            <S.Img src={pizza} alt="pizza" />
            <S.Dados>
              <S.Nome>Nome do Restaurante</S.Nome>
              <S.Endereco>Rua Comandante Ituriel, n 1612</S.Endereco>
              <S.Stars>
                <FaStar style={{ color: "#39b54a", width: "13px" }} />
                <FaStar style={{ color: "#39b54a", width: "13px" }} />
                <FaStar style={{ color: "#39b54a", width: "13px" }} />
              </S.Stars>
              <S.Btn>
                <FaUserFriends
                  style={{ color: "#FFF", width: "17px", marginRight: "9px" }}
                />
                R$ 100,00
              </S.Btn>
              <S.Btn2>Japonesa</S.Btn2>
            </S.Dados>
          </S.Produto>
        </S.GridProdutos>
      </S.Container>
    </>
  );
}

export default Estabelecimentos;
