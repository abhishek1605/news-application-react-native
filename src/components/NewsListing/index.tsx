import { Ionicons } from "@expo/vector-icons";
import { Box, Fab, useTheme } from "native-base";
import React, { useContext, useEffect } from "react";
import { shadowConfig } from "../../constants/commonConstants";
import { SET_THEME } from "../../constants/reducerConstants";
import AppContext from "../../Context/AppContext";
import { NavigationProps } from "../../types/appTypes";
import { setClientHeight } from "../../utils/commonUtils";
import ListingSection from "./ListingSection";

const NewsListing = ({ navigation }: NavigationProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { theme } = state || {};
  const { colors } = useTheme();
  const { textColor }: any = colors.primary;
  const handleThemeChange = (): void => {
    dispatch({
      type: SET_THEME,
      payload: { theme: theme === "dark" ? "light" : "dark" },
    });
  };
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e: any) => {
        e.preventDefault();
        return;
      }),
    [navigation]
  );
  return (
    <Box bg="primary.backgroundColor" width="100%" height={setClientHeight()}>
      <ListingSection />
      <Fab
        placement="bottom-right"
        borderWidth={1}
        borderColor="primary.borderColor"
        bg="primary.buttonColor"
        {...shadowConfig}
        size={16}
        icon={
          theme === "dark" ? (
            <Ionicons name="moon" size={30} style={{ color: textColor }} />
          ) : (
            <Ionicons name="sunny" size={30} style={{ color: textColor }} />
          )
        }
        onPress={handleThemeChange}
      />
    </Box>
  );
};

export default NewsListing;
