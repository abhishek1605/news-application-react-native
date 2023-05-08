import { extendTheme, Theme } from "native-base";

// Extend the base theme to create a light theme
export const lightTheme: Theme = extendTheme({
  colors: {
    primary: {
      backgroundColor: "#FFFFFF",
      borderColor: "#8899A6",
      secondaryBgColor: "#F8F8F8",
      buttonColor: "#E4E9F1",
      textColor: "#000",
      selectedBtnTextColor: "#000",
    },
  },
});

// Extend the base theme to create a dark theme
export const darkTheme: Theme = extendTheme({
  colors: {
    primary: {
      backgroundColor: "#000000",
      borderColor: "#3E4453",
      secondaryBgColor: "#27292F",
      buttonColor: "#343F54",
      textColor: "#FFFFFF",
      selectedBtnTextColor: "#FFFFFF",
    },
  },
});
