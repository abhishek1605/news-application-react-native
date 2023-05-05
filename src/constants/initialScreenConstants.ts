export type languageConfigType = {
  text: string;
  btnText: string;
  queryParam: string;
};
type langugageType = {
  ENGLISH: languageConfigType;
  ARABIC: languageConfigType;
};

export const INITIAL_SCREEN_TEXT_CONFIG: langugageType = {
  ENGLISH: {
    text: "Choose Your Language",
    btnText: "English",
    queryParam: "en",
  },
  ARABIC: { text: "اختر لغتك", btnText: "عربي", queryParam: "ar" },
};
