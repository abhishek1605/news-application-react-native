import React, { useEffect, useReducer } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider, Box } from "native-base";
import AppContext from "./src/Context/AppContext";
import { AppReducer, initialState } from "./src/Reducer";
import { ContextProps } from "./src/types/appTypes";
import { actionType, initialStateTypes } from "./src/types/reducerTypes";
import { darkTheme, lightTheme } from "./src/Theme/ThemeConstants";
import NewAppContainer from "./src/components/NewAppContainer";
import { setClientHeight } from "./src/utils/commonUtils";
import { useColorScheme } from "react-native";
import { SET_THEME } from "./src/constants/reducerConstants";

const App = () => {
  const [state, dispatch] = useReducer<
    React.Reducer<initialStateTypes, actionType>
  >(AppReducer, initialState);
  const value: ContextProps = {
    state,
    dispatch,
  };
  const colorScheme = useColorScheme();
  useEffect(() => {
    dispatch({
      type: SET_THEME,
      payload: { theme: colorScheme ? colorScheme : "dark" },
    });
  }, []);
  const theme = state.theme === "light" ? lightTheme : darkTheme;
  return (
    <NativeBaseProvider theme={theme}>
      <GestureHandlerRootView>
        <AppContext.Provider value={value}>
          <Box
            width="100%"
            height={setClientHeight()}
            bg="primary.backgroundColor"
            safeArea
          >
            <NewAppContainer />
          </Box>
        </AppContext.Provider>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
};
export default App;
