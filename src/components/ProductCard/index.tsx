import * as React from "react";
import {
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { IProduct } from "../../store";
import { FC } from "react";

import "./ProductCard.scss";
import { StarIcon } from "@chakra-ui/icons";
import { Slider } from "../Slider";

interface IProductCard {
  product: IProduct;
  handleClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  fullSize?: boolean;
}

const ProductCard: FC<IProductCard> = ({ product, handleClick, fullSize }) => {
  const { title, description, price, rating, stock, brand } = product;

  return (
    <Card
      width={fullSize ? "100%" : "350px"}
      margin={fullSize ? 0 : 1}
      mt={fullSize ? 3 : 0}
      className="card"
    >
      <CardBody>
        <div className="badge">
          <Button variant="solid" colorScheme="blue" marginRight="10px">
            <StarIcon color="yellow.500" />
            <span>{rating}</span>
          </Button>
        </div>

        <Image
          src={product.thumbnail}
          alt={`img ${title}`}
          borderRadius="lg"
          height={fullSize ? 300 : 150}
          width="100%"
          marginTop="-50px"
        />

        {fullSize && product?.images?.length > 1 && (
          <Box marginTop={3}>
            <Slider images={product.images} />
          </Box>
        )}

        {fullSize && (
          <Box
            color="blue.600"
            fontSize="2xl"
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            marginTop="6"
          >
            <Text fontSize="2xl">
              <span>{brand}</span>
            </Text>
          </Box>
        )}

        <Stack mt="6" spacing="3">
          <Heading className="title" size="md">
            {title}
          </Heading>
          <Text className="description">{description}</Text>
          <Box
            color="blue.600"
            fontSize="2xl"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            marginTop="6"
          >
            <Text color="blue.600" fontSize="2xl">
              <span>{price}$</span>
            </Text>
            <Text color="gray.600" fontSize="2xl" className="stock">
              <span>{price + stock}$</span>
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      {handleClick && (
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              data-id={product.id}
              onClick={handleClick}
            >
              Open
            </Button>
          </ButtonGroup>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCard;
