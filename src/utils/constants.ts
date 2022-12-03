export const routeUrl: string =
  process.env.NODE_ENV === "production" ? "/shop-effector" : "";

export const basepath = routeUrl === "" ? "/" : routeUrl;
