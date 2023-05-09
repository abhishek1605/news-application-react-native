import { Box, FlatList, useTheme } from "native-base";
import React, { useContext, useEffect, useRef } from "react";
import AppContext from "../../../Context/AppContext";
import { initialStateTypes } from "../../../types/reducerTypes";
import { fetchNewsData } from "../../../services/apiService";
import { convertObjIntoString } from "../../../utils/commonUtils";
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

type Scrollable = {
  scrollToOffset: (options: { offset: number; animated: boolean }) => void;
};

const ListingSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const { colors } = useTheme();
  const { textColor }: any = colors.primary;
  const listRef = useRef<Scrollable | null>(null);

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
      const response = await fetchNewsData(
        convertObjIntoString({ language, q: topic, sortBy, from })
      );
      const { status, articles = [] } = response;

      if (status === "ok") {
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
    } catch (e: any) {
      dispatch({
        type: SET_ARTICLES_ERROR,
        payload: { isError: true, isNewsLoading: false },
      });
    }
  };
  useEffect((): void => {
    getNewsData();
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: false });
    }
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
  const renderItem = ({ item }: { item: articles }) =>
    isError ? null : <NewsCard article={item} />;

  return (
    <Box height="100%">
      <FlatList
        ref={listRef}
        data={articles}
        renderItem={renderItem}
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
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={2} // Reduce initial render amount
        maxToRenderPerBatch={1} // Reduce number in each render batch
        updateCellsBatchingPeriod={100} // Increase time between renders
        windowSize={7}
      />
    </Box>
  );
};

export default ListingSection;
