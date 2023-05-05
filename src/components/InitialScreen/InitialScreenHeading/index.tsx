import React, { useMemo } from "react";
import { Box, Center, Text } from "native-base";
import { INITIAL_SCREEN_TEXT_CONFIG } from "../../../constants/initialScreenConstants";

const InitialScreenHeading = () => {
  const HEADING_VALUES: string[] = useMemo(() => {
    return Object.values(INITIAL_SCREEN_TEXT_CONFIG).map((val) => val.text);
  }, [INITIAL_SCREEN_TEXT_CONFIG]);
  return (
    <Box pt="18">
      <Center>
        {HEADING_VALUES.map((value, index) => (
          <Text key={index} color="primary.textColor" fontSize="xl">
            {value}
          </Text>
        ))}
      </Center>
    </Box>
  );
};

export default InitialScreenHeading;
