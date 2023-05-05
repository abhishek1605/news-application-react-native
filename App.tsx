import React, { useReducer } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider, Box, Button } from "native-base";
import AppContext from "./src/Context/AppContext";
import { AppReducer, initialState } from "./src/Reducer";
import { ContextProps } from "./src/types/appTypes";
import { actionType, initialStateTypes } from "./src/types/reducerTypes";
import { darkTheme, lightTheme } from "./src/Theme/ThemeConstants";
import NewAppContainer from "./src/components/NewAppContainer";
import { setClientHeight } from "./src/utils/commonUtils";

export default function App() {
  const [state, dispatch] = useReducer<
    React.Reducer<initialStateTypes, actionType>
  >(AppReducer, initialState);
  const value: ContextProps = {
    state,
    dispatch,
  };
  const theme = state.theme === "light" ? lightTheme : darkTheme;
  return (
    <AppContext.Provider value={value}>
      <NativeBaseProvider theme={theme}>
        <GestureHandlerRootView>
          <Box
            width="100%"
            height={setClientHeight()}
            bg="primary.backgroundColor"
            safeArea
          >
            <NewAppContainer />
          </Box>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </AppContext.Provider>
  );
}
