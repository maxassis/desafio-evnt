import React, { useState, createContext } from "react";

export const StateContext = createContext();

export function EstadoProvider(props) {
  //const [dados, setDados] = useState("")
  const [dados, setDados] = useState("");

  return (
    <>
      <StateContext.Provider value={[dados, setDados]}>
        {props.children}
      </StateContext.Provider>
    </>
  );
}
