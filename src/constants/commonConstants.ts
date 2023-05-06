import { languageTextType } from "../types/appTypes";

type shadowConfigType = {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export const shadowConfig: shadowConfigType = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.6,
  shadowRadius: 5,
  elevation: 5,
};

export const SWIPE_UP_TEXT: languageTextType = {
  en: "Swipe Up",
  ar: "اسحب للاعلى",
};

export const CANCEL_TEXT: languageTextType = {
  en: "CANCEL",
  ar: "يلغي",
};
export const SAVE_TEXT: languageTextType = {
  en: "SAVE",
  ar: "يحفظ",
};
