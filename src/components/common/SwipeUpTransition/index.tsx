import React, {
  PresenceTransition,
  VStack,
  Text,
  useTheme,
  Center,
} from "native-base";
import { useContext, useEffect, useMemo, useState } from "react";
import { Platform } from "react-native";
import { SWIPE_UP_TEXT } from "../../../constants/commonConstants";
import AppContext from "../../../Context/AppContext";
import {
  getlanguageText,
  getPresenceTransitionConfig,
} from "../../../utils/commonUtils";
import UpArrow from "../Icons/upArrowSvg";

const SwipeUpTransition = () => {
  const { colors } = useTheme();
  const { state } = useContext(AppContext);
  const { language } = state || {};
  const { textColor }: any = colors.primary;
  const [isFirstVisbile, setFirstVisble] = useState(true);
  const [isSecondVisbile, setSecondVisible] = useState(false);

  const swipeText: string = useMemo(() => {
    return getlanguageText(SWIPE_UP_TEXT, language);
  }, [language]);

  useEffect(() => {
    if (isFirstVisbile) {
      setTimeout(() => {
        setFirstVisble(false);
        setSecondVisible(true);
      }, 700);
    } else {
      setTimeout(() => {
        setFirstVisble(true);
        setSecondVisible(false);
      }, 700);
    }
  }, [isFirstVisbile, isSecondVisbile]);
  return (
    <Center position="relative" bottom="110">
      <VStack
        alignItems="center"
        justifyContent="space-between"
        position="relative"
        top={Platform.OS === "web" ? "7" : "0"}
      >
        <PresenceTransition
          visible={isFirstVisbile}
          {...getPresenceTransitionConfig({ duration: 700 })}
        >
          <UpArrow
            color={textColor}
            size="30"
            height="20"
            customStyle={{ position: "relative", top: "100" }}
          />
        </PresenceTransition>
        <PresenceTransition
          visible={isSecondVisbile}
          {...getPresenceTransitionConfig({ duration: 700 })}
        >
          <UpArrow
            color={textColor}
            size="30"
            height="20"
            customStyle={{ position: "relative", bottom: "0" }}
          />
        </PresenceTransition>
      </VStack>
      <Text fontSize="lg" fontWeight="800" color={textColor}>
        {swipeText}
      </Text>
    </Center>
  );
};

export default SwipeUpTransition;
