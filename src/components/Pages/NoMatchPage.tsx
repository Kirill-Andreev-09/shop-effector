import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ButtonBack } from "../ButtonBack";

export const NoMatchPage = () => {
  return (
    <Box
      maxWidth="8xl"
      margin="0"
      p={5}
      height="100vh"
      flexDirection="column"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Text mb={3}>Go to the home page</Text>
          <ButtonBack />
        </p>
      </div>
    </Box>
  );
};
