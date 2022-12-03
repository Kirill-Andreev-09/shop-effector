import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Button,
} from "@chakra-ui/react";
import { Loader } from "../Loader";
import { FC, useCallback } from "react";
import { setFilterByCategories } from "../../store";

import $store from "../../store";
import { useStore } from "effector-react";

interface CategoriesProps {
  categories: string[];
}

export const Categories: FC<CategoriesProps> = ({ categories }) => {
  const store = useStore($store);

  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      const value = event.currentTarget.dataset.category;

      if (value) {
        setFilterByCategories(value);
      }
    },
    []
  );

  return (
    <Accordion allowMultiple marginTop={3}>
      <AccordionItem>
        <h2>
          <AccordionButton paddingLeft={0}>
            <Box flex="1" textAlign="left">
              Categories
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          width="100%"
          display="flex"
          alignItems="center"
          textAlign="center"
          flexDirection="row"
          flexWrap="wrap"
          pl={0}
        >
          {categories.length ? (
            <>
              {categories.map((category: string) => {
                return (
                  <Button
                    key={category}
                    mr={1}
                    mb={1}
                    data-category={category}
                    onClick={handleClick}
                    colorScheme={
                      store.searchCategory === category ? "orange" : "gray"
                    }
                  >
                    {category}
                  </Button>
                );
              })}
            </>
          ) : (
            <Loader />
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
