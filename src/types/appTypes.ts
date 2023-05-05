import { actionType, initialStateTypes } from "./reducerTypes";

export type ContextProps = {
  state: initialStateTypes;
  dispatch: React.Dispatch<actionType>;
};
export type NavigationProps = {
  navigation: any;
};
