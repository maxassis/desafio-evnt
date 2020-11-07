import React from "react";
import Router from "./router";
import { EstadoProvider } from "./context/index";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <EstadoProvider>
        <Router />
        <GlobalStyles />
      </EstadoProvider>
    </>
  );
}

export default App;
