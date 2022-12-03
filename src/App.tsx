import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";

import { Search } from "./components/Search";
import { useEffect } from "react";
import { getData, getCategories } from "./store";
import { url } from "./api/constants";
import "./App.scss";
import { ProductList } from "./components/ProductList";
import { Categories } from "./components/Categories";
import { useStore } from "effector-react";
import $store, { update, toggle, remove } from "./store";
import { Sorting } from "./components/Sorting";
import { DisplayItems } from "./components/DisplayItems";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { basepath } from "./utils/constants";
import { HomePage } from "./components/Pages/HomePage";
import { ProductPage } from "./components/Pages/ProductPage";
import { NoMatchPage } from "./components/Pages/NoMatchPage";

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
