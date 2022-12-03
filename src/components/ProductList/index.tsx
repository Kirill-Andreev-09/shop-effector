import React, { useCallback } from "react";
import { Flex } from "@chakra-ui/react";
import { useStore } from "effector-react";
import $store from "../../store";
import ProductCard from "../ProductCard";
import { Loader } from "../Loader";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const store = useStore($store);
  const navigate = useNavigate();

  const data =
    store.search || store.searchCategory || store.sortField
      ? store.filterData
      : store.data;

  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      const id = event.currentTarget.dataset.id;
      navigate(`/product/${id}`);
    },
    [navigate]
  );

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      width="100%"
      flexWrap="wrap"
      marginTop="4"
      height="100%"
    >
      {store.data.length ? (
        <>
          {data.length ? (
            <>
              {data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleClick={handleClick}
                />
              ))}
            </>
          ) : (
            <div>Nothing found</div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </Flex>
  );
};

export { ProductList };
