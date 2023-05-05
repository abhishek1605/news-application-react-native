import { Platform } from "react-native";

export const setClientHeight = (height: number = 100) => {
  return Platform.OS === "web" ? `${height}vh` : `${height}%`;
};
