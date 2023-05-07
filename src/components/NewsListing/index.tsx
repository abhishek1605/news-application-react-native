import { Box, HStack } from "native-base";
import React, { useEffect } from "react";
import { NavigationProps } from "../../types/appTypes";
import { setClientHeight } from "../../utils/commonUtils";
import FilterSection from "./FilterSection";
import ListingSection from "./ListingSection";
import TopicSection from "./TopicSection";

const NewsListing = ({ navigation }: NavigationProps) => {
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e: any) => {
        e.preventDefault();
        return;
      }),
    [navigation]
  );
  return (
    <Box bg="primary.backgroundColor" width="100%" height={setClientHeight()}>
      <Box bg="primary.secondaryBgColor">
        <HStack width="100%" flexWrap="wrap">
          <TopicSection />
          <FilterSection />
        </HStack>
      </Box>
      <ListingSection />
    </Box>
  );
};

export default NewsListing;
