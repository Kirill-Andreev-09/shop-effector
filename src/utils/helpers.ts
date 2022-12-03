import { IProduct } from "../store";
import { Direction } from "../types";

interface IDataFilters {
  data: IProduct[];
  search: string;
  searchCategory: string;
  sortField: string;
  direction: Direction;
  count: number;
}

export const setAllFilters = (dataFilters: IDataFilters): IProduct[] => {
  const { data, search, searchCategory, sortField, direction, count } =
    dataFilters;
  let res: IProduct[] = [...data];

  if (search) {
    res = res.filter((product) => product.title.toLowerCase().includes(search));
  }
  if (searchCategory) {
    res = res.filter((item) => item.category.toLowerCase() === searchCategory);
  }
  if (sortField) {
    res = res.sort((a, b) => {
      const _a = a[sortField];
      const _b = b[sortField];

      const desc = _a < _b ? 1 : _a > _b ? -1 : 0;
      const asc = _a < _b ? -1 : _a > _b ? 1 : 0;

      return direction === Direction.Desc ? asc : desc;
    });
  }

  return res.slice(0, count);
};
