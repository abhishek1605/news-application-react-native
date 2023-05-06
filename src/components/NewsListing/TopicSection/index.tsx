import { Box, HStack, ScrollView, Text, Image, Pressable } from "native-base";
import React, { useContext } from "react";
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
    if (topic === queryText) {
      return true;
    }
    return false;
  };
  const handleTopicClick = (selectedTopic: string): void => {
    if (selectedTopic === topic) {
      return;
    }
    dispatch({ type: SET_TOPIC, payload: { topic: selectedTopic } });
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      flexBasis="70%"
      pt="2"
      pb="2"
    >
      <HStack space={2} alignItems="center">
        {TOPIC_PARAMS.map((query: topicParamType, index: number) => {
          const isSelected = getSelectedTagConfig(query.queryText);

          return (
            <Pressable
              key={index}
              onPress={() => handleTopicClick(query.queryText)}
            >
              <HStack
                bg={`${
                  isSelected ? "primary.backgroundColor" : "primary.borderColor"
                }`}
                {...shadowConfig}
                borderRadius={15}
                minW={51}
                p="2"
                pr="3"
                alignItems="center"
                borderWidth={1}
                borderColor={`${
                  isSelected ? "primary.borderColor" : "primary.backgroundColor"
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

export default TopicSection;
