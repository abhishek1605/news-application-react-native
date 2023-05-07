import { actionType, initialStateTypes } from "./reducerTypes";

export type ContextProps = {
  state: initialStateTypes;
  dispatch: React.Dispatch<actionType>;
};
export type NavigationProps = {
  navigation: any;
};
export type languageTextType = {
  en: string;
  ar: string;
};

export type articles = {
  source?: object;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content?: string;
};

export type languageArrayType = {
  en: string[];
  ar: string[];
};
