import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import bgimg from "../../components/assets/bg1.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bgimg}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  margin-top: 70px;
`;

export const Logowht = styled.img``;

export const ContainerCentral = styled.div`
  margin-top: 100px;
`;

export const Texto = styled.h1`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 50px;
  margin-bottom: 0px;
`;

export const AutoComp = styled(Autocomplete)`
  display: inline-block;
  margin-top: 35px;
  width: 40vw;
  background-color: white;
`;

export const Button = styled.button`
  position: relative;
  top: 12px;
  color: #fff;
  background-color: #39b54a;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  width: 15vw;
  height: 6vh;
  margin-left: 10px;
  margin-top: 5px;
`;
