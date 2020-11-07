import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const Container = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2.5px solid #e8e8e8;
  box-shadow: 0 0 8px 0 #e8e8e8;
`;

export const Logo = styled.img`
  width: 8vw;
`;

export const Inpt = styled.input`
  width: 60vw;
  height: 6vh;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #767676;
  border: 1px solid #e8e8e8;
  padding: 0rem 0rem 0rem 3rem;
  outline: 0;
`;

export const Btn = styled.button`
  position: relative;
  top: 11px;
  width: 15vw;
  height: 6vh;
  background-color: #39b54a;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin-left: 6px;
`;

export const Complete = styled(Autocomplete)`
  width: 60vw;
  display: inline-block;
  margin-bottom: 13px;
  border-radius: 0;
`;
