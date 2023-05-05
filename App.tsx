import React, { useReducer } from "react";
import { NativeBaseProvider, Box, Button } from "native-base";
import AppContext from "./src/Context/AppContext";
import { AppReducer, initialState } from "./src/Reducer";
import { ContextProps } from "./src/types/appTypes";
import { actionType, initialStateTypes } from "./src/types/reducerTypes";
import { darkTheme, lightTheme } from "./src/Theme/ThemeConstants";
import NewAppContainer from "./src/components/NewAppContainer";

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
        <Box width="100%" height="100%" bg="primary.50" safeArea>
          <NewAppContainer />
        </Box>
      </NativeBaseProvider>
    </AppContext.Provider>
  );
}
