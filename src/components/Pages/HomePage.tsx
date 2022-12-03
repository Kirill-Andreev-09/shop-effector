import * as React from "react";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import $store, { getCategories, getData } from "../../store";
import { useStore } from "effector-react";
import { DisplayItems } from "../DisplayItems";
import { Categories } from "../Categories";
import { Sorting } from "../Sorting";
import { Search } from "../Search";
import { ProductList } from "../ProductList";
import { url } from "../../api/constants";

export const HomePage = () => {
  useEffect(() => {
    getData(`${url}/products`);
  }, []);

  useEffect(() => {
    getCategories(`${url}/products/categories`);
  }, []);

  const store = useStore($store);

  return (
    <Box
      maxWidth="8xl"
      margin="auto"
      p={5}
      height="100vh"
      flexDirection="column"
      display="flex"
    >
      <DisplayItems />
      <Categories categories={store.categories} />
      <Sorting />
      <Search />
      <ProductList />
    </Box>
  );
};
