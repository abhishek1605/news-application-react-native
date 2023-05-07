import { Box } from "native-base";
import React, { useEffect } from "react";
import { NavigationProps } from "../../types/appTypes";
import { setClientHeight } from "../../utils/commonUtils";
import ListingSection from "./ListingSection";

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
      <ListingSection />
    </Box>
  );
};

export default NewsListing;
