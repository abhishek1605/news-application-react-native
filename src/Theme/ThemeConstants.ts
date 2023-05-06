import { extendTheme, Theme } from "native-base";

// Extend the base theme to create a light theme
export const lightTheme: Theme = extendTheme({
  colors: {
    primary: {
      backgroundColor: "#DCEEF3",
      100: "#C2E2EA",
      borderColor: "#C2E2EA",
      secondaryBgColor: "#A7D5E1",
      300: "#8DC8D8",
      buttonColor: "#72BBCE",
      textColor: "#000",
      selectedBtnTextColor: "#fff",
    },
  },
});

// Extend the base theme to create a dark theme
export const darkTheme: Theme = extendTheme({
  colors: {
    primary: {
      50: "#00607A",
      secondaryBgColor: "#005066",
      borderColor: "#004052",
      buttonColor: "#00303D",
      backgroundColor: "#002029",
      textColor: "#fff",
      selectedBtnTextColor: "#fff",
    },
  },
});
