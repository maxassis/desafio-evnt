import React, { useContext, useState } from "react";
import * as S from "./styles";
import { FaRegStar } from "react-icons/fa";
import { StateContext2 } from "../../context/index";

function SideBar() {
  const [resposta, setResposta] = useContext(StateContext2);
  const [qualificacao, setQualificacao] = useState("");
  const [preco, setPreco] = useState("");
  const [cozinha, setCozinha] = useState("");

  const inputQualificacao = (event) => {
    setQualificacao(event.target.value);
  };
  console.log(qualificacao);

  const inputPreco = (event) => {
    setPreco(event.target.value);
  };

  const inputCozinha = (event) => {
    setCozinha(event.target.value);
  };

  function teste2() {
    const filtrado = resposta.filter((produto) => {
      if (
        Math.floor(produto.restaurant.user_rating.aggregate_rating) ==
        qualificacao
      ) {
        return produto;
      }
    });
    setResposta(filtrado);
  }

  function teste3() {
    if (resposta !== "") {
      const filtrado = resposta.filter((produto) => {
        if (produto.restaurant.cuisines.indexOf(cozinha) !== -1) return produto;
      });
      setResposta(filtrado);
    }
  }

  return (
    <>
      <S.Container>
        <div>
          <S.Tipo>NOTA:</S.Tipo>
          <button onClick={teste2}></button>
          <div>
            <S.Inpt
              type="checkbox"
              name="1star"
              key="1"
              onChange={inputQualificacao}
              value="1"
            />
            <S.Lbl for="1star">
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="2star"
              key="2"
              onChange={inputQualificacao}
              value="2"
            />
            <S.Lbl for="2star">
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="3star"
              key="3"
              onChange={inputQualificacao}
              value="3"
            />
            <S.Lbl for="3star">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="4star"
              key="4"
              onChange={inputQualificacao}
              value="4"
            />
            <S.Lbl for="4star">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="5star"
              key="5"
              onChange={inputQualificacao}
              value="5"
            />
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
              value="1"
              onChange={inputPreco}
            />
            <S.Lbl for="50">Ate R$ 50,00</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="50a80"
              key="02"
              value="produto.restaurant.average_cost_for_two > 50 &&
              produto.restaurant.average_cost_for_two < 80"
              onChange={inputPreco}
            />
            <S.Lbl for="50a80">De R$50,00 a R$80,00</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="80a110"
              key="03"
              value="produto.restaurant.average_cost_for_two > 80 &&
              produto.restaurant.average_cost_for_two < 100"
              onChange={inputPreco}
            />
            <S.Lbl for="80a110">De R$80,00 a R$110,00</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="acima110"
              key="04"
              value="produto.restaurant.average_cost_for_two > 100"
              onChange={inputPreco}
            />
            <S.Lbl for="acima110">Acima de R$ 110,00</S.Lbl>
          </div>
        </div>
        <div>
          <S.Tipo>TIPO DE COZINHA</S.Tipo>
          <div>
            <S.Inpt
              type="checkbox"
              name="arabe"
              key="001"
              value="Arabic"
              onChange={inputCozinha}
            />
            <S.Lbl for="arabe">Árabe</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="brasileira"
              key="002"
              value="Brazilian"
              onChange={inputCozinha}
            />
            <S.Lbl for="brasileira">Brasileira</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="chinesa"
              key="003"
              value="Chinese"
              onChange={inputCozinha}
            />
            <S.Lbl for="chinesa">Chinesa</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="francesa"
              key="004"
              value="French"
              onChange={inputCozinha}
            />
            <S.Lbl for="francesa">Francesa</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="frutos"
              key="005"
              value="Seafood"
              onChange={inputCozinha}
            />
            <S.Lbl for="frutos">Frutos do Mar</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="italiana"
              key="006"
              value="Italian"
              onChange={inputCozinha}
            />
            <S.Lbl for="italiana">Italiana</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="japonesa"
              key="007"
              value="Japanese"
              onChange={inputCozinha}
            />
            <S.Lbl for="japonesa">Japonesa</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="mexicana"
              key="008"
              value="Mexican"
              onChange={inputCozinha}
            />
            <S.Lbl for="mexicana">Mexicana</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="peruana"
              key="009"
              value="Peruvian"
              onChange={inputCozinha}
            />
            <S.Lbl for="peruana">Peruana</S.Lbl>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default SideBar;
