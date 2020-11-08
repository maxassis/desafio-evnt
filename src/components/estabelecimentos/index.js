import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import pizza from "../assets/pizza.webp";
import { FaStar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { StateContext } from "../../context/index";

function Estabelecimentos() {
  const [dados] = useContext(StateContext);
  const [resposta, setResposta] = useState("");
  //console.log(dados);

  useEffect(() => {
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/location_details?entity_id=67&entity_type=city`,
        {
          headers: {
            "user-key": "0f0709faa524595d78efbf821cc36f94",
          },
        }
      )
      .then((response) => {
        //console.log(response);
        setResposta(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [dados]);

  console.log(resposta);

  return (
    <>
      <S.Container>
        <S.HeaderLocal>
          <S.Local>Restaurantes em {dados.title}</S.Local>
        </S.HeaderLocal>
        <S.GridProdutos>
          {resposta !== "" ? (
            resposta.best_rated_restaurant.map(function (user) {
              return (
                <S.Produto>
                  <S.Img src={user.restaurant.thumb} alt="pizza" />
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
