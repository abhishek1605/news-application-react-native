import { HStack } from "native-base";
import React, { useContext, useMemo } from "react";
import {
  INITIAL_SCREEN_TEXT_CONFIG,
  languageConfigType,
} from "../../../constants/initialScreenConstants";
import { SET_LANGUAGE } from "../../../constants/reducerConstants";
import AppContext from "../../../Context/AppContext";
import CustomButton from "../../common/CustomButton";

const InitialScreenButtons = () => {
  const { state, dispatch } = useContext(AppContext);
  const { language } = state || {};
  const BTN_TEXT: languageConfigType[] = useMemo(() => {
    return Object.values(INITIAL_SCREEN_TEXT_CONFIG);
  }, [INITIAL_SCREEN_TEXT_CONFIG]);
  const handleBtnPress = (queryParam: string) => {
    if (language === queryParam) {
      return;
    }
    dispatch({ type: SET_LANGUAGE, payload: { queryParam } });
  };
  return (
    <HStack space={2} justifyContent="center" pt="15">
      {BTN_TEXT.map((config, index) => (
        <CustomButton
          key={index}
          btnText={config.btnText}
          isSelected={language === config.queryParam}
          onPress={() => handleBtnPress(config.queryParam)}
          isDisabled={false}
          customStyle={{ width: 125, height: 50 }}
        />
      ))}
    </HStack>
  );
};

export default InitialScreenButtons;
