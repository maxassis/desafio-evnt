import React from "react";
import * as S from "./styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LogoRed from "../assets/logo-red.jpg";
import styled from "styled-components";

const Plete = styled(Autocomplete)`
  width: 60vw;
  display: inline-block;
  margin-bottom: 13px;
  border-radius: 0;
`;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

function Header() {
  return (
    <>
      <S.Container>
        <div>
          <S.Logo src={LogoRed} alt="logo vermelho" />
        </div>
        <div>
          <Plete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Digite a sua cidade"
                size="small"
                variant="outlined"
              />
            )}
          />
          <S.Btn>BUSCAR</S.Btn>
        </div>
      </S.Container>
    </>
  );
}

export default Header;
