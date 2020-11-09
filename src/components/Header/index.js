import React, { useContext, useState, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import LogoRed from "../assets/logo-red.jpg";
import { StateContext } from "../../context/index";

function Header(props) {
  const [lugar, setLugar] = useState("sao paulo");
  const [escolhido, setEscolhido] = useState("");
  const [dados, setDados] = useContext(StateContext);
  //console.log(dados.title);

  const inputDados = (event) => {
    setLugar(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://developers.zomato.com/api/v2.1/locations?query=${lugar}`, {
        headers: {
          "user-key": "0f0709faa524595d78efbf821cc36f94",
        },
      })
      .then((response) => {
        // console.log(response.data.location_suggestions);
        setEscolhido(response.data.location_suggestions);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [lugar]);

  function busca() {
    setDados(...escolhido);
  }

  return (
    <>
      <S.Container>
        <div>
          <S.Logo src={LogoRed} alt="logo vermelho" />
        </div>
        <div>
          <S.Complete
            id="combo-box-demo"
            options={escolhido}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Digite a sua cidade"
                size="small"
                variant="outlined"
                onChange={inputDados}
                value={lugar}
              />
            )}
          />
          <S.Btn onClick={busca}>BUSCAR</S.Btn>
        </div>
      </S.Container>
    </>
  );
}

export default Header;
