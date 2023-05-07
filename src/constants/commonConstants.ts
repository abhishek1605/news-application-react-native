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
export const FIND_MORE_TEXT: languageTextType = {
  en: "Find out more",
  ar: "اكتشف المزيد",
};

export const DEFAULT_ERROR_MESSAGE: languageTextType = {
  en: "Something Went Wrong! Please Try Again Later",
  ar: "هناك خطأ ما! يرجى المحاولة مرة أخرى في وقت لاحق",
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
