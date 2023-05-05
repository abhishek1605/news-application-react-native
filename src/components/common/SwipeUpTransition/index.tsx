import React, {
  PresenceTransition,
  VStack,
  Text,
  useTheme,
  Center,
} from "native-base";
import { useContext, useEffect, useMemo, useState } from "react";
import AppContext from "../../../Context/AppContext";
import UpArrow from "../Icons/upArrowSvg";

const SwipeUpTransition = () => {
  const { colors } = useTheme();
  const { state } = useContext(AppContext);
  const { language } = state || {};
  const { textColor }: any = colors.primary;
  const [isFirstVisbile, setFirstVisble] = useState(true);
  const [isSecondVisbile, setSecondVisible] = useState(false);
  const swipeText: string = useMemo(() => {
    if (language === "en") {
      return "Swipe Up";
    }
    if (language === "ar") {
      return "اسحب للاعلى";
    }
    return "";
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
    <Center>
      <VStack alignItems="center" justifyContent="space-between">
        <PresenceTransition
          visible={isFirstVisbile}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 700,
            },
          }}
        >
          <UpArrow
            color={textColor}
            size="30"
            height="20"
            customStyle={{ position: "relative", bottom: "10" }}
          />
        </PresenceTransition>
        <PresenceTransition
          visible={isSecondVisbile}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 700,
            },
          }}
        >
          <UpArrow
            color={textColor}
            size="30"
            height="20"
            customStyle={{ position: "relative", bottom: "100" }}
          />
        </PresenceTransition>
      </VStack>
      <Text
        position="relative"
        bottom="120"
        fontSize="lg"
        fontWeight="800"
        color={textColor}
      >
        {swipeText}
      </Text>
    </Center>
  );
};

export default SwipeUpTransition;
