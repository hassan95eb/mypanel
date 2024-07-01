import { createContext } from "react";

export const MainBodyContext = createContext({
  offcanvas: true,
  setOffcanvas: () => {},
});
