import moment from "moment";
import { ResponsiveValue } from "native-base/lib/typescript/components/types";
import { Platform } from "react-native";
import { LANGUAGE_DAYS, LANGUAGE_MONTH } from "../constants/commonConstants";
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
export const getTextAlign = (
  language: string | undefined
): ResponsiveValue<CanvasTextAlign> => {
  if (language === "ar") {
    return "right";
  }
  return "left";
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

export const getDateText = (
  date: string,
  language: string | undefined
): string => {
  if (date) {
    const dateObj = new Date(date);
    if (language === "ar") {
      const arDays: string[] = LANGUAGE_DAYS.ar;
      const arMonths: string[] = LANGUAGE_MONTH.ar;
      return `${arDays[dateObj.getDay()]}, ${dateObj.getDate()} ${
        arMonths[dateObj.getMonth()]
      }, ${dateObj.getFullYear()}`;
    }
    if (language === "en") {
      const enDays: string[] = LANGUAGE_DAYS.en;
      const enMonths: string[] = LANGUAGE_MONTH.en;
      return `${enDays[dateObj.getDay()]}, ${dateObj.getDate()} ${
        enMonths[dateObj.getMonth()]
      }, ${dateObj.getFullYear()}`;
    }
  }

  return "";
};
