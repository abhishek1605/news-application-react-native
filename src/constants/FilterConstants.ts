import { languageTextType } from "../types/appTypes";
import { getPastDate } from "../utils/commonUtils";

export type filterOptionsType = {
  name: languageTextType;
  value: string;
};
export type filterConfigType = {
  type: string;
  filterTitleText: languageTextType;
  filterOptions: filterOptionsType[];
};

export const FILTER_SECTION_TEXT: languageTextType = {
  en: "Filter Section",
  ar: "قسم التصفية",
};

export const FILTER_CONFIG: filterConfigType[] = [
  {
    type: "language",
    filterTitleText: {
      en: "Language",
      ar: "لغة",
    },
    filterOptions: [
      {
        name: {
          en: "English",
          ar: "English",
        },
        value: "en",
      },
      {
        name: {
          en: "عربي",
          ar: "عربي",
        },
        value: "ar",
      },
    ],
  },
  {
    type: "sortBy",
    filterTitleText: {
      en: "Sort By",
      ar: "ترتيب حسب",
    },
    filterOptions: [
      {
        name: {
          en: "Published At",
          ar: "نشرت في",
        },
        value: "publishedAt",
      },
      {
        name: {
          en: "Relevancy",
          ar: "الصلة",
        },
        value: "relevancy",
      },
      {
        name: {
          en: "Popularity",
          ar: "شعبية",
        },
        value: "popularity",
      },
    ],
  },
  {
    type: "from",
    filterTitleText: {
      en: "From",
      ar: "من",
    },
    filterOptions: [
      {
        name: {
          en: "Past 30 Days",
          ar: "آخر 30 يومًا",
        },
        value: getPastDate(30),
      },
      {
        name: {
          en: "Past 15 Days",
          ar: "الخمسة عشر يومًا الماضية",
        },
        value: getPastDate(15),
      },
      {
        name: {
          en: "Past 7 Days",
          ar: "الأيام السبعة الماضية",
        },
        value: getPastDate(7),
      },
      {
        name: {
          en: "Yesterday",
          ar: "أمس",
        },
        value: getPastDate(1),
      },
    ],
  },
];
