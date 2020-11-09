import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import food3 from "../assets/food3.png";
import { FaStar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { StateContext, StateContext2 } from "../../context/index";

function Estabelecimentos() {
  const [dados] = useContext(StateContext);
  const [resposta, setResposta] = useContext(StateContext2);
  //console.log(dados.entity_id);

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
        //console.log(response);
        setResposta(response.data.best_rated_restaurant);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dados]);

  //console.log(resposta);

  return (
    <>
      <S.Container>
        <S.HeaderLocal>
          <S.Local>Restaurantes em {dados.title}</S.Local>
        </S.HeaderLocal>
        <S.GridProdutos>
          {resposta !== "" ? (
            resposta.map(function (user) {
              return (
                <S.Produto>
                  {user.restaurant.thumb === "" ? (
                    <S.Img src={food3} alt="brave" />
                  ) : (
                    <S.Img src={user.restaurant.thumb} alt="restaurante" />
                  )}
                  <S.Dados>
                    <S.Nome>{user.restaurant.name}</S.Nome>
                    <S.Endereco>{user.restaurant.location.address}</S.Endereco>
                    <S.Stars>
                      <FaStar style={{ color: "#39b54a", width: "13px" }} />
                      <FaStar style={{ color: "#39b54a", width: "13px" }} />
                      <FaStar style={{ color: "#39b54a", width: "13px" }} />
                    </S.Stars>
                    <S.Btn>
                      <FaUserFriends
                        style={{
                          color: "#FFF",
                          width: "17px",
                          marginRight: "9px",
                        }}
                      />
                      {user.restaurant.average_cost_for_two}
                    </S.Btn>
                    <S.Btn2>{user.restaurant.cuisines}</S.Btn2>
                  </S.Dados>
                </S.Produto>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </S.GridProdutos>
      </S.Container>
    </>
  );
}

export default Estabelecimentos;
