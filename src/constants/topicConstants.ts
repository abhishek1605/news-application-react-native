import { ImageSourcePropType } from "react-native";
import { languageTextType } from "../types/appTypes";

export type customStyleType = {
  width: number;
  height: number;
  bottom?: number;
  left?: number;
};

export type topicParamType = {
  queryText: string;
  iconUrl: ImageSourcePropType;
  tabText: languageTextType;
  customStyle: customStyleType;
  ml: number;
};
export const TOPIC_PARAMS: topicParamType[] = [
  {
    queryText: "apple",
    iconUrl: require("../../assets/apple-logo.png"),
    tabText: { en: "Apple", ar: "تفاحة" },
    customStyle: {
      width: 5,
      height: 6,
      left: 1.5,
    },
    ml: 4,
  },
  {
    queryText: "meta",
    iconUrl: require("../../assets/meta-logo.png"),
    tabText: { en: "Meta", ar: "ميتا" },
    customStyle: {
      width: 10,
      height: 6,
    },
    ml: 2,
  },
  {
    queryText: "netflix",
    iconUrl: require("../../assets/netflix-logo.png"),
    tabText: { en: "Netflix", ar: "نيتفليكس" },
    customStyle: {
      width: 5,
      height: 6,
      left: 1.5,
    },
    ml: 4,
  },
  {
    queryText: "google",
    iconUrl: require("../../assets/google-logo.png"),
    tabText: { en: "Google", ar: "جوجل" },
    customStyle: {
      width: 6,
      height: 6,
      left: 1,
    },
    ml: 3,
  },
  {
    queryText: "twitter",
    iconUrl: require("../../assets/twitter-logo.png"),
    tabText: { en: "Twitter", ar: "تويتر" },
    customStyle: {
      width: 8,
      height: 6,
    },
    ml: 1,
  },
  {
    queryText: "tesla",
    iconUrl: require("../../assets/tesla-logo.png"),
    tabText: { en: "Tesla", ar: "تسلا" },
    customStyle: {
      width: 7,
      height: 6,
      left: 0.5,
    },
    ml: 3.5,
  },
];
