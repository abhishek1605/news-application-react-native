import moment from "moment";
import { Platform } from "react-native";
import { languageTextType } from "../types/appTypes";
import { configParamType, transitionConfigType } from "../types/utilsTypes";

export const setClientHeight = (height: number = 100): string => {
  return Platform.OS === "web" ? `${height}vh` : `${height}%`;
};

export const getPresenceTransitionConfig = ({
  duration = 500,
  isAddScaling,
}: configParamType): transitionConfigType => {
  const config: transitionConfigType = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration,
      },
    },
  };
  if (isAddScaling) {
    config.initial.scale = 0;
    config.animate.scale = 1;
  }
  return config;
};

export const getlanguageText = (
  langObj: languageTextType,
  language: string | undefined
): string => {
  if (language === "en") {
    return langObj.en;
  }
  if (language === "ar") {
    return langObj.ar;
  }
  return "";
};

export const getPastDate = (days: number): string => {
  return moment().subtract(days, "days").format("YYYY-MM-DD");
};

export const convertObjIntoString = (obj: object): string => {
  let string = "";
  Object.keys(obj).forEach((key) => {
    string = string + `&${key}=${obj[key as keyof object]}`;
  });
  return string;
};
