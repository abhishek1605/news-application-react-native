import React from "react";
import { Box, Center, Text } from "native-base";
import { languageTextType } from "../../../types/appTypes";
import { getlanguageText } from "../../../utils/commonUtils";

type errorProps = {
  errorMessage: languageTextType;
  language: string | undefined;
  iconComponent: any;
};

const ErrorScreen = ({ errorMessage, language, iconComponent }: errorProps) => {
  return (
    <Box
      alignItems="center"
      marginTop="auto"
      marginBottom="auto"
      pt="170"
      p="5"
    >
      <Center>
        {iconComponent}
        <Text mt="2" fontSize="md" color="primary.textColor">
          {getlanguageText(errorMessage, language)}
        </Text>
      </Center>
    </Box>
  );
};

export default ErrorScreen;
