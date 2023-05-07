import { articles } from "./appTypes";

export type initialStateTypes = {
  theme: string;
  language: string | undefined;
  topic?: string;
  sortBy: string;
  from: string;
  articles: articles[];
  isNewsLoading: boolean;
  isError: boolean;
};
export type payloadType = {
  queryParam?: string;
  topic?: string;
  from?: string;
  language?: string;
  theme?: string;
  articles?: articles[];
  isNewsLoading?: boolean;
  isError?: boolean;
};

export type actionType = {
  type: string;
  payload: payloadType;
};
