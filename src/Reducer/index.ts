import { SET_LANGUAGE } from "../constants/reducerConstants";
import { actionType, initialStateTypes } from "../types/reducerTypes";

export const initialState: initialStateTypes = {
  theme: "dark",
  language: "",
};

export const AppReducer = (state: initialStateTypes, action: actionType) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      const { queryParam } = action.payload;
      return {
        ...state,
        language: queryParam,
      };
    }
    default:
      throw new Error("No such action exist");
  }
};
