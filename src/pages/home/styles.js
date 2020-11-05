import styled from "styled-components";
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
`;

export const Input = styled.input`
  width: 40vw;
  height: 6.5vh;
  border: none;
  margin-top: 35px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #767676;
  padding: 0rem 0rem 0rem 3rem;
  outline: 0;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #39b54a;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  width: 15vw;
  height: 6.5vh;
  margin-left: 10px;
  margin-top: 35px;
`;
