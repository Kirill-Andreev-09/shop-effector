export enum Direction {
  Asc = "ASC",
  Desc = "DESC",
}

export interface ISortItem {
  direction: Direction;
  sortField: string;
  active: boolean;
}
