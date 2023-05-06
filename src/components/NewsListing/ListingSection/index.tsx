import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../../../Context/AppContext";

const ListingSection = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {}, [state]);

  return (
    <View>
      <Text>Listing Section</Text>
    </View>
  );
};

export default ListingSection;
