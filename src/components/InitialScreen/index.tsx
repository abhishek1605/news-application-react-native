import { EasingFunction, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Box } from "native-base";
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
import AppContext from "../../Context/AppContext";

type dimensionTypes = {
  duration: number;
  easing: EasingFunction;
};
const easeInOpt: dimensionTypes = {
  duration: 100,
  easing: Easing.linear,
};

const InitialScreen = ({ navigation }: NavigationProps) => {
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
        <PanGestureHandler onGestureEvent={swipeScreenGestureHandler}>
          <Animated.View style={styles.swipeStrip} />
        </PanGestureHandler>
      </Animated.View>
    </Box>
  );
};

export default InitialScreen;
