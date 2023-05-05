import { createContext } from "react";
import { ContextProps } from "../types/appTypes";

const AppContext = createContext({} as ContextProps);

export default AppContext;
