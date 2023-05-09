import {
  SET_ARTICLES_ERROR,
  SET_ARTICLES_LOADING,
  SET_ARTICLE_DATA,
  SET_FILTER_VALUES,
  SET_LANGUAGE,
  SET_THEME,
  SET_TOPIC,
} from "../constants/reducerConstants";
import { actionType, initialStateTypes } from "../types/reducerTypes";
import { getPastDate } from "../utils/commonUtils";

export const initialState: initialStateTypes = {
  theme: "",
  language: "",
  topic: "apple",
  sortBy: "publishedAt",
  from: getPastDate(15),
  articles: [],
  isNewsLoading: false,
  isError: false,
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
    case SET_THEME: {
      const { theme } = action.payload;
      return {
        ...state,
        theme,
      };
    }
    case SET_TOPIC: {
      const { topic } = action.payload;
      return {
        ...state,
        topic,
      };
    }
    case SET_ARTICLES_ERROR:
    case SET_ARTICLES_LOADING:
    case SET_ARTICLE_DATA:
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
