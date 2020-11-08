import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import logowhite from "../../components/assets/logo-white.jpg";
import TextField from "@material-ui/core/TextField";
import { StateContext } from "../../context/index";

function Home() {
  const history = useHistory();
  const [lugar, setLugar] = useState("sao paulo");
  const [escolhido, setEscolhido] = useState("");
  const [dados, setDados] = useContext(StateContext);

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
        console.log(response.data.location_suggestions);
        setEscolhido(response.data.location_suggestions);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [lugar]);

  const proxPagina = async () => {
    await setDados(...escolhido);
    history.push("/restaurantes");
  };

  return (
    <>
      <S.Container>
        <S.Logo>
          <S.Logowht src={logowhite} />
        </S.Logo>
        <S.ContainerCentral>
          <div>
            <S.Texto>
              Descubra os melhores
              <br /> restaurantes em sua cidade
            </S.Texto>
          </div>
          <form>
            <S.AutoComp
              id="combo-box-demo"
              options={escolhido}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Digite sua cidade"
                  required
                  size="small"
                  variant="outlined"
                  onChange={inputDados}
                  value={lugar}
                />
              )}
            />
            <S.Button onClick={proxPagina}>BUSCAR</S.Button>
          </form>
        </S.ContainerCentral>
      </S.Container>
    </>
  );
}

export default Home;
