import { Box, HStack, Text } from "native-base";
import React from "react";
import { shadowConfig } from "../../../../constants/commonConstants";
import FilterSection from "../../FilterSection";
import TopicSection from "../../TopicSection";

type listingHeaderProps = {
  children: any;
};

const ListingHeader = ({ children }: listingHeaderProps) => {
  return (
    <Box>
      <Box
        p="3"
        width="100%"
        bg="primary.secondaryBgColor"
        {...shadowConfig}
        borderWidth="1"
        borderColor="primary.borderColor"
      >
        <Text textAlign="center" color="primary.textColor" fontWeight="black">
          News Feed
        </Text>
      </Box>
      <HStack width="100%" flexWrap="wrap" bg="primary.secondaryBgColor">
        <TopicSection />
        <FilterSection />
      </HStack>
      {children}
    </Box>
  );
};

export default React.memo(ListingHeader);
