import { Box, Divider, HStack, Text } from "native-base";
import React, { useContext } from "react";
import {
  NEWS_FEED_TEXT,
  shadowConfig,
} from "../../../../constants/commonConstants";
import AppContext from "../../../../Context/AppContext";
import { getlanguageText } from "../../../../utils/commonUtils";
import FilterSection from "../../FilterSection";
import TopicSection from "../../TopicSection";

type listingHeaderProps = {
  children: any;
};

const ListingHeader = ({ children }: listingHeaderProps) => {
  const { state } = useContext(AppContext);
  const { language } = state || {};
  return (
    <Box>
      <Box p="3" bg="primary.secondaryBgColor" {...shadowConfig}>
        <Text textAlign="center" color="primary.textColor" fontWeight="black">
          {getlanguageText(NEWS_FEED_TEXT, language)}
        </Text>
      </Box>
      <HStack
        width="100%"
        borderColor="primary.borderColor"
        borderTopWidth="1"
        borderBottomWidth="1"
        flexWrap="wrap"
        bg="primary.secondaryBgColor"
      >
        <TopicSection />
        <FilterSection />
      </HStack>
      {children}
    </Box>
  );
};

export default React.memo(ListingHeader);
