import { extendTheme, Theme } from "native-base";

// Extend the base theme to create a light theme
export const lightTheme: Theme = extendTheme({
  colors: {
    primary: {
      50: "#DCEEF3",
      100: "#C2E2EA",
      200: "#A7D5E1",
      300: "#8DC8D8",
      400: "#72BBCE",
    },
  },
});

// Extend the base theme to create a dark theme
export const darkTheme: Theme = extendTheme({
  colors: {
    primary: {
      50: "#00607A",
      100: "#005066",
      200: "#004052",
      300: "#00303D",
      400: "#002029",
    },
  },
});
