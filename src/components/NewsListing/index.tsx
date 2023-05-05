import { PresenceTransition, Text } from "native-base";
import React, { useEffect } from "react";
import { NavigationProps } from "../../types/appTypes";
import { NavigationContainer } from "@react-navigation/native";

const NewsListing = ({ navigation }: NavigationProps) => {
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e: any) => {
        e.preventDefault();
        return;
      }),
    [navigation]
  );
  return (
    <PresenceTransition
      visible
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 250,
        },
      }}
    >
      <Text>new listing Page</Text>
    </PresenceTransition>
  );
};

export default NewsListing;
