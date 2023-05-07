import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";

type WebViewScreenRouteProp = RouteProp<
  Record<string, { url: string }>,
  string
>;
const WebViewScreen = () => {
  const route = useRoute<WebViewScreenRouteProp>();
  const { params } = route;
  const { url } = params;
  return <WebView source={{ uri: url }} style={{ flex: 1, height: "100%" }} />;
};

export default WebViewScreen;
