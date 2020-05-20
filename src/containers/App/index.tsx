import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

import Global from "./Global";
import Calculator from "../Calculator";

const App: React.FC = () => {
  return (
    <>
      <Global />
      <ThemeProvider theme={theme}>
        <Calculator />
      </ThemeProvider>
    </>
  );
};

export default App;
