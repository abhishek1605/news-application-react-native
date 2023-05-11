import { languageArrayType, languageTextType } from "../types/appTypes";

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
    height: 6,
  },
  shadowOpacity: 0.4,
  shadowRadius: 4,
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
export const FIND_MORE_TEXT: languageTextType = {
  en: "Find out more",
  ar: "اكتشف المزيد",
};

export const DEFAULT_ERROR_MESSAGE: languageTextType = {
  en: "Something Went Wrong! Please Try Again Later",
  ar: "هناك خطأ ما! يرجى المحاولة مرة أخرى في وقت لاحق",
};
export const NEWS_FEED_TEXT: languageTextType = {
  en: "News Feed",
  ar: "موجز الأخبار",
};
export const DEFAULT_EMPTY_MESSAGE: languageTextType = {
  en: "No News Feed Found",
  ar: "لم يتم العثور على موجز أخبار",
};
export const LANGUAGE_DAYS: languageArrayType = {
  en: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
  ar: ["اﻷحد", "اﻷثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة", "السبت"],
};

export const LANGUAGE_MONTH: languageArrayType = {
  en: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  ar: [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
};

export const NEWS_API_KEYS: string[] = [
  "fdb07f4a97b54701928970d75a30fbda",
  "7b665b8fbe884b45abeb1dcc966da19d",
  "986df724f7164bfc8da2be5df3b622b2",
  "0aaafe1a0fad4b9b833a427ca9adb66a",
];
