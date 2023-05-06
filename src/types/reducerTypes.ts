export type initialStateTypes = {
  theme: string;
  language: string | undefined;
  topic: string;
  sortBy: string;
  from: string;
};
export type payloadType = {
  queryParam?: string;
  topic?: string;
  from?: string;
  language?: string;
  theme?: string;
};

export type actionType = {
  type: string;
  payload: payloadType;
};
