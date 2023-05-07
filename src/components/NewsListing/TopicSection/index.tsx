import { Box, HStack, ScrollView, Text, Image, Pressable } from "native-base";
import React, { useContext, useMemo } from "react";
import { Platform } from "react-native";
import { shadowConfig } from "../../../constants/commonConstants";
import { SET_TOPIC } from "../../../constants/reducerConstants";
import {
  topicParamType,
  TOPIC_PARAMS,
} from "../../../constants/topicConstants";
import AppContext from "../../../Context/AppContext";
import { getlanguageText } from "../../../utils/commonUtils";

const TopicSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const { topic, language } = state || {};
  const getSelectedTagConfig = (queryText: string): boolean => {
    return topic === queryText;
  };
  const handleTopicClick = (selectedTopic: string): void => {
    if (selectedTopic === topic) {
      return;
    }
    dispatch({ type: SET_TOPIC, payload: { topic: selectedTopic } });
  };
  const USED_TOPIC_PARAMS: topicParamType[] = useMemo(() => {
    return TOPIC_PARAMS.sort(function (x, y) {
      return x.queryText === topic ? -1 : y.queryText === topic ? 1 : 0;
    });
  }, [topic]);
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      p="2"
      pr="10"
      flexBasis="70%"
    >
      <HStack space={1} alignItems="center">
        {USED_TOPIC_PARAMS.map((query: topicParamType, index: number) => {
          const isSelected = getSelectedTagConfig(query.queryText);

          return (
            <Pressable
              mr={`${
                USED_TOPIC_PARAMS.length - 1 === index && Platform.OS !== "web"
                  ? "5"
                  : "0"
              }`}
              key={index}
              onPress={() => handleTopicClick(query.queryText)}
            >
              <HStack
                bg={`${
                  isSelected ? "primary.backgroundColor" : "primary.buttonColor"
                }`}
                {...shadowConfig}
                borderRadius={15}
                minW={51}
                p="2"
                pr="3"
                alignItems="center"
                borderWidth={1}
                borderColor={`${
                  isSelected ? "primary.backgroundColor" : "primary.borderColor"
                }`}
              >
                <Image
                  {...query.customStyle}
                  source={query.iconUrl}
                  alt={query.queryText}
                  p="1"
                />
                {isSelected && (
                  <Text
                    fontWeight="black"
                    textAlign="right"
                    fontSize="md"
                    ml={query.ml}
                    position="relative"
                    color="primary.textColor"
                  >
                    {getlanguageText(query.tabText, language)}
                  </Text>
                )}
              </HStack>
            </Pressable>
          );
        })}
      </HStack>
    </ScrollView>
  );
};

export default React.memo(TopicSection);
