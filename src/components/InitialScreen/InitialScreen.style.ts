import { StyleSheet, ViewStyle } from "react-native";

type SwipeStripStyle = ViewStyle & {
  width: string;
  height: number;
  backgroundColor: string;
  bottom: number;
  left: number;
};

type InitialScreenStyle = {
  swipeStrip: SwipeStripStyle;
};

const styles = StyleSheet.create<InitialScreenStyle>({
  swipeStrip: {
    position: "absolute",
    width: "100%",
    height: 100,
    bottom: 0,
    left: 0,
  },
});

export default styles;
