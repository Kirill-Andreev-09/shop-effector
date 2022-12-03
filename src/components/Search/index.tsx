import * as React from "react";
import { Grid, Input } from "@chakra-ui/react";
import { useStore } from "effector-react";

import $store, { setFilter } from "../../store";

const Search = () => {
  const store = useStore($store);

  return (
    <Grid pt={2}>
      <Input
        placeholder="Search..."
        value={store.search}
        onChange={(evt: any) => setFilter(evt.target.value)}
      />
    </Grid>
  );
};

export { Search };
