import { articles } from "../types/appTypes";

type newsReponse = {
  articles?: Promise<articles[]>;
  status?: boolean;
};

export const fetchNewsData = async (params: string): Promise<newsReponse> => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?apiKey=7b665b8fbe884b45abeb1dcc966da19d${params}`
    );
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const returnResponse: newsReponse = {
      status: response.ok,
      articles: response.json() as Promise<articles[]>,
    };
    return returnResponse;
  } catch (error) {
    throw new Error("something went wrong");
  }
};
