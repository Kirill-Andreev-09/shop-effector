import * as React from "react";
import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { clearFilters } from "../../store";

const handleClick = () => {
  clearFilters();
};

export const ClearFilters = () => {
  return (
    <Button
      colorScheme="telegram"
      onClick={handleClick}
      color="white"
      leftIcon={<DeleteIcon color="white" />}
    >
      Clear filters
    </Button>
  );
};
