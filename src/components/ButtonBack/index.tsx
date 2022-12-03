import * as React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const ButtonBack = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <Button
      colorScheme="telegram"
      onClick={goBack}
      color="white"
      leftIcon={<ArrowBackIcon color="white" />}
    >
      Back
    </Button>
  );
};
