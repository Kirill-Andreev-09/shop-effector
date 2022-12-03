import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import { basepath } from "./utils/constants";
import { HomePage, NoMatchPage, ProductPage } from "./Pages";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter basename={basepath}>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="/" element={<Navigate replace to="/homepage" />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
