import { createEvent, createStore, createEffect } from "effector";
import { Direction, ISortItem } from "./types";
import { sortData } from "./utils";
import { setAllFilters } from "./utils/helpers";

export interface Store {
  data: IProduct[];
  initData: IProduct[];
  filterData: IProduct[];
  categories: string[];
  search: string;
  searchCategory: string;
  sort: ISortItem[];
  sortField: string;
  displayItems: number;
  direction: Direction;
  currentProductData: IProduct | null;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const filterProducts = (
  data: IProduct[],
  query: string,
  state: Store
): IProduct[] => {
  return setAllFilters({
    data,
    search: query,
    searchCategory: state.searchCategory,
    sortField: state.sortField,
    direction: state.direction,
    count: state.displayItems,
  });
};

export const filterProductsByCategories = (
  data: IProduct[],
  category: string,
  state: Store
): IProduct[] => {
  return setAllFilters({
    data,
    searchCategory: category,
    search: state.search,
    sortField: state.sortField,
    direction: state.direction,
    count: state.displayItems,
  });
};

export const sortProducts = (
  data: IProduct[],
  sortField: string,
  direction: Direction,
  state: Store
): IProduct[] => {
  return setAllFilters({
    data,
    sortField,
    direction,
    searchCategory: state.searchCategory,
    search: state.search,
    count: state.displayItems,
  });
};

export const updateSortData = (
  sortData: ISortItem[],
  payload: ISortItem
): ISortItem[] =>
  sortData.map((item: ISortItem) => {
    return item.sortField === payload.sortField
      ? { ...item, direction: payload.direction, active: true }
      : { ...item, active: false };
  });

export const setDisplayItems = (
  data: IProduct[],
  count: number,
  state: Store
): IProduct[] => {
  return setAllFilters({
    data,
    count,
    search: state.search,
    searchCategory: state.searchCategory,
    sortField: state.sortField,
    direction: state.direction,
  });
};

export const setFilter = createEvent<string>();
export const setFilterByCategories = createEvent<string>();
export const setSortProducts = createEvent<{
  sortField: string;
  direction: Direction;
  active: boolean;
}>();
export const setCountItem = createEvent<number>();
export const addTodo = createEvent();
export const update = createEvent<{ id: number; text: string }>();
export const remove = createEvent<number>();
export const toggle = createEvent<number>();

export const getData = createEffect(async (url: string) => {
  const req = await fetch(url);

  return req.json();
});

export const getCategories = createEffect(async (url: string) => {
  const req = await fetch(url);

  return req.json();
});

export const getDataProductById = createEffect(async (url: string) => {
  const req = await fetch(url);
  console.log("req", req);

  return req.json();
});

export default createStore<Store>({
  initData: [],
  data: [],
  filterData: [],
  categories: [],
  search: "",
  searchCategory: "",
  sort: sortData,
  displayItems: 15,
  sortField: "",
  direction: Direction.Asc,
  currentProductData: null,
})
  .on(getData.doneData, (state, data) => ({
    ...state,
    data: data.products?.slice(0, state.displayItems),
    initData: data.products,
  }))
  .on(getCategories.doneData, (state, data) => ({
    ...state,
    categories: data,
  }))
  .on(getDataProductById.doneData, (state, data) => ({
    ...state,
    currentProductData: data,
  }))
  .on(setFilter, (state, search) => ({
    ...state,
    filterData: filterProducts(state.initData, search, state),
    search: search,
    searchCategory: "",
  }))
  .on(setFilterByCategories, (state, category) => ({
    ...state,
    filterData: filterProductsByCategories(state.initData, category, state),
    searchCategory: category,
  }))
  .on(setSortProducts, (state, { sortField, direction, active }) => ({
    ...state,
    filterData: sortProducts(state.initData, sortField, direction, state),
    sort: updateSortData(state.sort, { sortField, direction, active }),
    sortField: sortField,
  }))
  .on(setCountItem, (state, displayItems) => ({
    ...state,
    displayItems: displayItems,
    filterData: setDisplayItems(state.initData, displayItems, state),
    data: setDisplayItems(state.initData, displayItems, state),
  }));
