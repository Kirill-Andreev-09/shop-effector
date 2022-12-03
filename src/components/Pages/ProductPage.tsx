import * as React from "react";
import { Box } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import $store, { getDataProductById, IProduct } from "../../store";
import { useStore } from "effector-react";
import { url } from "../../api/constants";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../ButtonBack";

interface IProductPage {
  id?: string;
}

export const ProductPage: FC<IProductPage> = () => {
  let param = useParams();
  const store = useStore($store);

  useEffect(() => {
    if (param?.id) {
      getDataProductById(`${url}/products/${param.id}`);
    }
  }, [param.id]);

  const product = store.currentProductData
    ? store.currentProductData
    : ({} as IProduct);

  return (
    <Box p={5} height="100vh" flexDirection="column" display="flex">
      <ButtonBack />
      <ProductCard product={product} fullSize />
    </Box>
  );
};
