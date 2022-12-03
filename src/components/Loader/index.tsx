import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Spinner size="xl" color="blue.500" />
    </Flex>
  );
};

export { Loader };
