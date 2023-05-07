import { Box } from "native-base";
import React, { useContext, useEffect } from "react";
import AppContext from "../../../Context/AppContext";
import { initialStateTypes } from "../../../types/reducerTypes";
import { fetchNewsData } from "../../../services/apiService";
import {
  convertObjIntoString,
  getlanguageText,
} from "../../../utils/commonUtils";
import mockJson from "../../../../mockJson.json";
import {
  SET_ARTICLES_ERROR,
  SET_ARTICLES_LOADING,
  SET_ARTICLE_DATA,
} from "../../../constants/reducerConstants";
import NewsCardLoader from "../../common/NewsCardLoader";

const ListingSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const {
    language,
    topic,
    sortBy,
    from,
    isNewsLoading,
    isError,
    articles,
  }: initialStateTypes = state || {};

  const getNewsData = async (): Promise<void> => {
    try {
      dispatch({
        type: SET_ARTICLES_LOADING,
        payload: { isNewsLoading: true },
      });
      // commenting api call for now till the issue with paid version is resolved.
      //   const response = await fetchNewsData(
      //     converrtObjIntoString({ language, q: topic, sortBy, from })
      //   );
      setTimeout(() => {
        const response = mockJson;
        const { status, articles = [] } = response;
        if (status) {
          dispatch({
            type: SET_ARTICLE_DATA,
            payload: { articles, isNewsLoading: false },
          });
        } else {
          dispatch({
            type: SET_ARTICLES_ERROR,
            payload: { isError: true, isNewsLoading: false },
          });
        }
      }, 5000);
    } catch (e: any) {
      dispatch({
        type: SET_ARTICLES_ERROR,
        payload: { isError: true, isNewsLoading: false },
      });
    }
  };
  useEffect((): void => {
    getNewsData();
  }, [language, topic, sortBy, from]);

  return (
    <Box pt="7" p="5">
      {isNewLoading && <NewsCardLoader />}
    </Box>
  );
};

export default ListingSection;
