import React, { useContext, useEffect, useState } from "react";
import { EasingFunction, useWindowDimensions } from "react-native";

import AppContext from "../../Context/AppContext";
import { Box, Center, Image } from "native-base";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import { NAVIGATION_PAGES } from "../../constants/navigatorConstants";
import { NavigationProps } from "../../types/appTypes";
import { setClientHeight } from "../../utils/commonUtils";

import styles from "./InitialScreen.style";
import InitialScreenHeading from "./InitialScreenHeading";
import InitialScreenButtons from "./InitialScreenButtons";
import SwipeUpTransition from "../common/SwipeUpTransition";

const initialScreenLangImg = require("../../../assets/initial-screen-lang-icon.png");
const initialScreenLangImgDarkMode = require("../../../assets/initial-screen-lang-icon-darkmode.png");

type dimensionTypes = {
  duration: number;
  easing: EasingFunction;
};
const easeInOpt: dimensionTypes = {
  duration: 100,
  easing: Easing.linear,
};

const InitialScreen = ({ navigation }: NavigationProps) => {
  const { state } = useContext(AppContext);
  const { language, theme } = state || {};
  const y = useSharedValue(0);
  const [navigateScreen, setNavigateScreen] = useState<boolean>(false);
  const { height } = useWindowDimensions();
  const handleNavigate = (value: boolean) => {
    setNavigateScreen(value);
  };
  const swipeScreenGestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      y.value = withTiming(0, easeInOpt);
    },
    onActive: (event) => {
      y.value = event.translationY;
    },
    onEnd: (event) => {
      if (y.value < -height / 2 || event.velocityY < -500) {
        y.value = withTiming(-height, easeInOpt);
        runOnJS(handleNavigate)(true);
      } else {
        y.value = withTiming(0, easeInOpt);
      }
    },
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(y.value, easeInOpt),
        },
      ],
    };
  });

  useEffect(() => {
    if (navigateScreen) {
      navigation.navigate(NAVIGATION_PAGES.NEWS_LISTING);
    }
  }, [navigateScreen]);

  return (
    <Box bg="primary.backgroundColor" width="100%">
      <Animated.View
        style={[{ height: setClientHeight() }, animatedContainerStyle]}
      >
        <Box {...styles.container} backgroundColor="primary.backgroundColor">
          <Center zIndex={2}>
            <Image
              size={150}
              source={
                theme === "light"
                  ? initialScreenLangImg
                  : initialScreenLangImgDarkMode
              }
              alt="Alternate Text"
            />
            <InitialScreenHeading />
            <InitialScreenButtons />
          </Center>
        </Box>
        {language && (
          <PanGestureHandler onGestureEvent={swipeScreenGestureHandler}>
            <Animated.View style={styles.swipeStrip}>
              <SwipeUpTransition />
            </Animated.View>
          </PanGestureHandler>
        )}
      </Animated.View>
    </Box>
  );
};

export default InitialScreen;
