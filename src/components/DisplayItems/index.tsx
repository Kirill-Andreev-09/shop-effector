import * as React from "react";
import { Box, Grid, Select } from "@chakra-ui/react";
import $store, { setCountItem } from "../../store";
import { useStore } from "effector-react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { ClearFilters } from "../ClearFilters";

const handleChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
  const count = Number(event.currentTarget.value);
  setCountItem(count);
};

const DisplayItems = () => {
  const store = useStore($store);

  return (
    <Grid pt={2} templateColumns="1fr 5fr 5fr" columnGap="3">
      <ColorModeSwitcher />

      <ClearFilters />
      <Select
        width="100%"
        defaultValue={store.displayItems}
        onChange={handleChange}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </Select>
    </Grid>
  );
};

export { DisplayItems };
