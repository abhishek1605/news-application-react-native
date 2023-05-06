import {
  SET_FILTER_VALUES,
  SET_LANGUAGE,
  SET_TOPIC,
} from "../constants/reducerConstants";
import { actionType, initialStateTypes } from "../types/reducerTypes";
import { getPastDate } from "../utils/commonUtils";

export const initialState: initialStateTypes = {
  theme: "dark",
  language: "",
  topic: "apple",
  sortBy: "publishedAt",
  from: getPastDate(90),
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
    case SET_TOPIC: {
      const { topic } = action.payload;
      return {
        ...state,
        topic,
      };
    }
    case SET_FILTER_VALUES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      throw new Error("No such action exist");
  }
};
