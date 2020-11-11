import React from "react";
import * as S from "./styles";
import { FaRegStar } from "react-icons/fa";
//import { StateContext2 } from "../../context/index";

function SideBar() {
  // const [resposta, setResposta] = useContext(StateContext2);

  return (
    <>
      <S.Container>
        <div>
          <S.Tipo>NOTA:</S.Tipo>
          <div>
            <S.Inpt type="checkbox" name="1star" key="1" value="1" />
            <S.Lbl for="1star">
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="2star" key="2" value="2" />
            <S.Lbl for="2star">
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="3star" key="3" value="3" />
            <S.Lbl for="3star">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="4star" key="4" value="4" />
            <S.Lbl for="4star">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="5star" key="5" value="5" />
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
            <S.Inpt type="checkbox" name="50" key="01" value="1" />
            <S.Lbl for="50">Ate R$ 50,00</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="50a80"
              key="02"
              value="produto.restaurant.average_cost_for_two > 50 &&
              produto.restaurant.average_cost_for_two < 80"
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
            <S.Inpt type="checkbox" name="arabe" key="001" value="Arabic" />
            <S.Lbl for="arabe">Árabe</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="brasileira"
              key="002"
              value="Brazilian"
            />
            <S.Lbl for="brasileira">Brasileira</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="chinesa" key="003" value="Chinese" />
            <S.Lbl for="chinesa">Chinesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="francesa" key="004" value="French" />
            <S.Lbl for="francesa">Francesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="frutos" key="005" value="Seafood" />
            <S.Lbl for="frutos">Frutos do Mar</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="italiana" key="006" value="Italian" />
            <S.Lbl for="italiana">Italiana</S.Lbl>
          </div>
          <div>
            <S.Inpt
              type="checkbox"
              name="japonesa"
              key="007"
              value="Japanese"
            />
            <S.Lbl for="japonesa">Japonesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="mexicana" key="008" value="Mexican" />
            <S.Lbl for="mexicana">Mexicana</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="peruana" key="009" value="Peruvian" />
            <S.Lbl for="peruana">Peruana</S.Lbl>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default SideBar;
