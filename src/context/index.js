import React, { useState, createContext } from "react";

export const StateContext = createContext();
export const StateContext2 = createContext();

export function EstadoProvider(props) {
  const [dados, setDados] = useState("sao paulo");

  return (
    <>
      <StateContext.Provider value={[dados, setDados]}>
        {props.children}
      </StateContext.Provider>
    </>
  );
}

export function EstadoProvider2(props) {
  const [resposta, setResposta] = useState("");

  return (
    <>
      <StateContext2.Provider value={[resposta, setResposta]}>
        {props.children}
      </StateContext2.Provider>
    </>
  );
}
