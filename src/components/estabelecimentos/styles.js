import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 85vh;
  //background-color: gold;
  margin-top: 9px;
  margin-left: 25px;
  margin-right: auto;
`;

export const HeaderLocal = styled.div`
  display: flex;
  align-items: center;
  //background-color: green;
  height: 60px;
`;

export const Local = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #333;
  font-size: 24px;
`;

export const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 10px;
`;

export const Produto = styled.div`
  width: 350px;
  height: 250px;
  border: 1.9px solid #e8e8e8;
  box-shadow: 0 0 10px 0 #e8e8e8;
`;

export const Img = styled.img`
  width: 100%;
  height: 110px;
`;

export const Dados = styled.div``;

export const Nome = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #333;
  font-size: 15px;
  font-weight: 600;
  margin-left: 15px;
`;

export const Endereco = styled.p`
  color: #a5a5a5;
  font-size: 14px;
  font-weight: 300;
  margin-left: 15px;
  margin-top: 4px;
`;

export const Stars = styled.p`
  margin-left: 15px;
  margin-top: 4px;
`;

export const Btn = styled.button`
  width: 8vw;
  height: 4vh;
  background-color: #39b54a;
  margin-left: 15px;
  margin-top: 10px;
  border: none;
`;

export const Btn2 = styled.button`
  width: 8vw;
  height: 4vh;
  margin-left: 10px;
  border: none;
`;
