import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import pizza from "../assets/pizza.webp";
import { FaStar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { StateContext } from "../../context/index";

function Estabelecimentos() {
  const [dados] = useContext(StateContext);
  const [lojas, setLojas] = useState("");
  //console.log(dados.title);

  useEffect(() => {
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/location_details?entity_id=${dados.entity_id}&entity_type=${dados.entity_type}`,
        {
          headers: {
            "user-key": "0f0709faa524595d78efbf821cc36f94",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        //setEscolhido(response.data.location_suggestions);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [dados]);

  return (
    <>
      <S.Container>
        <S.HeaderLocal>
          <S.Local>Restaurantes em {dados.title}</S.Local>
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
