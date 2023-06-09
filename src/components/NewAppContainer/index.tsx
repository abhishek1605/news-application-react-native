import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATION_PAGES } from "../../constants/navigatorConstants";
import InitialScreen from "../InitialScreen";
import NewsListing from "../NewsListing";
import WebViewScreen from "../WebViewScreen";

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
        <Stack.Screen
          name={NAVIGATION_PAGES.WEB_VIEW_SCREEN}
          component={WebViewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NewAppContainer;
