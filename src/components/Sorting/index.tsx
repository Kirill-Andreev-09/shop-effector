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
import { FC, useCallback } from "react";
import { setSortProducts } from "../../store";

import $store from "../../store";
import { useStore } from "effector-react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Direction, ISortItem } from "../../types";

export const Sorting: FC = () => {
  const store = useStore($store);

  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      const sortField = event.currentTarget.dataset.sort;
      const active = true;
      const direction =
        event.currentTarget.dataset.direction === Direction.Asc
          ? Direction.Desc
          : Direction.Asc;

      if (direction && sortField && active) {
        setSortProducts({ sortField, direction, active });
      }
    },
    []
  );

  return (
    <Accordion allowMultiple borderTop="transparent">
      <AccordionItem>
        <h2>
          <AccordionButton paddingLeft={0}>
            <Box flex="1" textAlign="left">
              Sorting
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
          {store.sort.map((sortItem: ISortItem) => {
            return (
              <Button
                key={sortItem.sortField}
                mr={1}
                mb={1}
                data-sort={sortItem.sortField}
                data-direction={sortItem.direction}
                onClick={handleClick}
                colorScheme={sortItem.active ? "orange" : "gray"}
              >
                {sortItem.sortField}
                {sortItem.direction === Direction.Asc ? (
                  <ChevronDownIcon />
                ) : (
                  <ChevronUpIcon />
                )}
              </Button>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
