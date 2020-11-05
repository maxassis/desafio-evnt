import React from "react";
import * as S from "./styles";
import pizza from "../assets/pizza.webp";

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
              <S.Descricao>Rua Comandante Ituriel, n 1612</S.Descricao>
              <S.Stars></S.Stars>
              <S.Btn></S.Btn>
            </S.Dados>
          </S.Produto>
          <S.Produto>
            <S.Img src={pizza} alt="pizza" />
          </S.Produto>
          <S.Produto>
            <S.Img src={pizza} alt="pizza" />
          </S.Produto>
          <S.Produto>
            <S.Img src={pizza} alt="pizza" />
          </S.Produto>
        </S.GridProdutos>
      </S.Container>
    </>
  );
}

export default Estabelecimentos;
