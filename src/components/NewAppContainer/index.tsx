import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Box } from "native-base";
import React, { useContext } from "react";
import { NAVIGATION_PAGES } from "../../constants/navigatorConstants";
import AppContext from "../../Context/AppContext";
import InitialScreen from "../InitialScreen";
import NewsListing from "../NewsListing";

const Stack = createNativeStackNavigator();

const NewAppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={NAVIGATION_PAGES.INITIAL_SCREEN}
      >
        <Stack.Screen
          name={NAVIGATION_PAGES.INITIAL_SCREEN}
          component={InitialScreen}
        />
        <Stack.Screen
          name={NAVIGATION_PAGES.NEWS_LISTING}
          component={NewsListing}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NewAppContainer;
