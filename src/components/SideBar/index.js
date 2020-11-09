import React, { useEffect, useState, useContext } from "react";
import * as S from "./styles";
//import axios from "axios";
import { FaRegStar } from "react-icons/fa";
import { StateContext2 } from "../../context/index";

function SideBar() {
  //const [retorno, setRetorno] = useState("");
  const [resposta, setResposta] = useContext(StateContext2);

  /* useEffect(() => {
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
        setRetorno(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [setRetorno]); */

  //console.log(resposta);

  function teste() {
    if (resposta !== "") {
      const filtrado = resposta.filter((produto) => {
        if (produto.restaurant.average_cost_for_two < 50) return produto;
        /* if (
          produto.restaurant.average_cost_for_two > 50 &&
          produto.restaurant.average_cost_for_two < 80
        )
          return produto; */
      });
      setResposta(filtrado);
    }
  }

  return (
    <>
      <S.Container>
        <div>
          <S.Tipo>NOTA:</S.Tipo>
          <button onClick={teste}></button>
          <div>
            <S.Inpt type="checkbox" name="1star" key="1" />
            <S.Lbl for="1star">
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="2star" key="2" />
            <S.Lbl for="2star">
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="3star" key="3" />
            <S.Lbl for="3star">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="4star" key="4" />
            <S.Lbl for="4star">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="5star" key="5" />
            <S.Lbl for="5star">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
        </div>
        <div>
          <S.Tipo>CUSTO PARA 2 PESSOAS:</S.Tipo>
          <div>
            <S.Inpt
              type="checkbox"
              name="50"
              key="01"
              value="produto.restaurant.average_cost_for_two < 50"
            />
            <S.Lbl for="50">Ate R$ 50,00</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="50a80"
              key="02"
              value=" produto.restaurant.average_cost_for_two < 50 &&
          produto.restaurant.average_cost_for_two < 80"
            />
            <S.Lbl for="50a80">De R$50,00 a R$80,00</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="80a110"
              key="03"
              value=" produto.restaurant.average_cost_for_two > 80 &&
          produto.restaurant.average_cost_for_two < 100"
            />
            <S.Lbl for="80a110">De R$80,00 a R$110,00</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="acima110"
              key="04"
              value="produto.restaurant.average_cost_for_two > 100"
            />
            <S.Lbl for="acima110">Acima de R$ 110,00</S.Lbl>
          </div>
        </div>
        <div>
          <S.Tipo>TIPO DE COZINHA</S.Tipo>
          <div>
            <S.Inpt type="checkbox" name="arabe" key="001" />
            <S.Lbl for="arabe">Árabe</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="brasileira" key="002" />
            <S.Lbl for="brasileira">Brasileira</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="chinesa" key="003" />
            <S.Lbl for="chinesa">Chinesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="francesa" key="004" />
            <S.Lbl for="francesa">Francesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="frutos" key="005" />
            <S.Lbl for="frutos">Frutos do Mar</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="italiana" key="006" />
            <S.Lbl for="italiana">Italiana</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="japonesa" key="007" />
            <S.Lbl for="japonesa">Japonesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="mexicana" key="008" />
            <S.Lbl for="mexicana">Mexicana</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="peruana" key="009" />
            <S.Lbl for="peruana">Peruana</S.Lbl>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default SideBar;
