import React from "react";

import * as S from "./styles";

function SideBar() {
  return (
    <>
      <S.Container>
        <div>
          <S.Tipo>NOTA:</S.Tipo>
          <div>
            <S.Inpt type="checkbox" />
          </div>
          <div>
            <S.Inpt type="checkbox" />
          </div>
          <div>
            <S.Inpt type="checkbox" />
          </div>
          <div>
            <S.Inpt type="checkbox" />
          </div>
          <div>
            <S.Inpt type="checkbox" />
          </div>
        </div>
        <div>
          <S.Tipo>CUSTO PARA DUAS PESSOAS:</S.Tipo>
          <div>
            <S.Inpt type="checkbox" name="50" />
            <S.Lbl for="50">Ate R$ 50,00</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="50a80" />
            <S.Lbl for="50a80">De R$50,00 a R$80,00</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="80a110" />
            <S.Lbl for="80a110">De R$80,00 a R$110,00</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="acima110" />
            <S.Lbl for="acima110">Acima de R$ 110,00</S.Lbl>
          </div>
        </div>
        <div>
          <S.Tipo>TIPO DE COZINHA</S.Tipo>
          <div>
            <S.Inpt type="checkbox" name="arabe" />
            <S.Lbl for="arabe">Árabe</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="brasileira" />
            <S.Lbl for="brasileira">Brasileira</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="chinesa" />
            <S.Lbl for="chinesa">Chinesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="francesa" />
            <S.Lbl for="francesa">Francesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="frutos" />
            <S.Lbl for="frutos">Frutos do Mar</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="italiana" />
            <S.Lbl for="italiana">Italiana</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="japonesa" />
            <S.Lbl for="japonesa">Japonesa</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="mexicana" />
            <S.Lbl for="mexicana">Mexicana</S.Lbl>
          </div>
          <div>
            <S.Inpt type="checkbox" name="peruana" />
            <S.Lbl for="peruana">Peruana</S.Lbl>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default SideBar;
