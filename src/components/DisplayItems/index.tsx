import * as React from "react";
import { Grid, Select } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

import $store, { setCountItem } from "../../store";
import { useStore } from "effector-react";

const handleChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
  const count = Number(event.currentTarget.value);
  setCountItem(count);
};

const DisplayItems = () => {
  const store = useStore($store);

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />

      <Select defaultValue={store.displayItems} onChange={handleChange}>
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
