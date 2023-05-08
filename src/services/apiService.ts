import { articles } from "../types/appTypes";

type newsReponse = {
  articles?: articles[];
  status?: string;
};

export const fetchNewsData = async (params: string): Promise<newsReponse> => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?apiKey=7b665b8fbe884b45abeb1dcc966da19d${params}`
    );
    const data = await response.json();
    const { status, articles } = data;

    if (status === "error") {
      throw new Error("something went wrong");
    }
    const returnResponse: newsReponse = {
      status,
      articles: articles as articles[],
    };
    return returnResponse;
  } catch (error) {
    throw new Error("something went wrong");
  }
};
