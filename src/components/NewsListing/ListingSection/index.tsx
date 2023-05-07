import { Box, FlatList, useTheme } from "native-base";
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
import {
  DEFAULT_EMPTY_MESSAGE,
  DEFAULT_ERROR_MESSAGE,
} from "../../../constants/commonConstants";
import ErrorScreen from "../../common/ErrorScreen";
import NewsCard from "./NewsCard";
import { articles } from "../../../types/appTypes";
import ListingHeader from "./ListingHeader";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const ListingSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const { colors } = useTheme();
  const { textColor }: any = colors.primary;
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
        payload: { isNewsLoading: true, articles: [] },
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

  const renderHeader = () => {
    return (
      <ListingHeader>
        {isNewsLoading ? (
          <NewsCardLoader />
        ) : isError ? (
          <ErrorScreen
            errorMessage={DEFAULT_ERROR_MESSAGE}
            language={language}
            iconComponent={
              <MaterialIcons name="error" size={40} color={textColor} />
            }
          />
        ) : null}
      </ListingHeader>
    );
  };
  return (
    <Box height="100%">
      <FlatList
        data={articles}
        renderItem={({ item }: { item: articles }) =>
          isError ? null : <NewsCard article={item} />
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={
          isError || isNewsLoading ? null : (
            <ErrorScreen
              errorMessage={DEFAULT_EMPTY_MESSAGE}
              language={language}
              iconComponent={
                <MaterialCommunityIcons
                  name="magnify-close"
                  size={40}
                  color={textColor}
                />
              }
            />
          )
        }
        stickyHeaderIndices={[0]}
        keyExtractor={(_, key) => `article_${key}`}
      />
    </Box>
  );
};

export default ListingSection;
