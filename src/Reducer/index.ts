import { actionType, initialStateTypes } from "../types/reducerTypes";

export const initialState: initialStateTypes = {
  theme: "light",
};

export const AppReducer = (state: initialStateTypes, action: actionType) => {
  switch (action.type) {
    default:
      throw new Error("No such action exist");
  }
};
