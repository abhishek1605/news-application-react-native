export type initialStateTypes = {
  theme: string;
  language: string | undefined;
};
export type payloadType = {
  queryParam?: string;
};

export type actionType = {
  type: string;
  payload: payloadType;
};
