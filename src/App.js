import React from "react";
import Router from "./router";
import { EstadoProvider, EstadoProvider2 } from "./context/index";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <EstadoProvider2>
        <EstadoProvider>
          <Router />
          <GlobalStyles />
        </EstadoProvider>
      </EstadoProvider2>
    </>
  );
}

export default App;
