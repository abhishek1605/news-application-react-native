import { StyleSheet } from "react-native";

type SwipeStripStyle = {
  width: string;
  height: number;
  bottom: number;
  left: number;
};

type ContainerStyle = {
  alignItems: string;
  marginBottom: string;
  marginTop: string;
};

type InitialScreenStyle = {
  swipeStrip: SwipeStripStyle;
  container: ContainerStyle;
};

const styles: InitialScreenStyle = StyleSheet.create({
  swipeStrip: {
    position: "absolute",
    width: "100%",
    height: 120,
    bottom: 0,
    left: 0,
  },
  container: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default styles;
