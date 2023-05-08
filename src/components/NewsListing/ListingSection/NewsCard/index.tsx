import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  HStack,
  Image,
  Stack,
  Text,
  Box,
  useTheme,
  Pressable,
  Divider,
  Tooltip,
} from "native-base";
import React, { useContext, useMemo } from "react";
import { Platform } from "react-native";
import {
  FIND_MORE_TEXT,
  shadowConfig,
} from "../../../../constants/commonConstants";
import { NAVIGATION_PAGES } from "../../../../constants/navigatorConstants";
import AppContext from "../../../../Context/AppContext";
import { articles } from "../../../../types/appTypes";
import {
  getDateText,
  getlanguageText,
  getTextAlign,
} from "../../../../utils/commonUtils";

type newsCardProps = {
  article: articles;
};
const NewsCard = ({ article }: newsCardProps) => {
  const navigation: any = useNavigation();
  const handleCardPress = (url: string): void => {
    if (Platform.OS === "web") {
      window.open(url, "_blank");
    } else {
      navigation.navigate(NAVIGATION_PAGES.WEB_VIEW_SCREEN, {
        url,
      } as { url: string });
    }
  };
  const { title, urlToImage, author, url, description, publishedAt } = article;
  const { colors } = useTheme();
  const { textColor }: any = colors.primary;
  const { state } = useContext(AppContext);
  const { theme, language } = state || {};
  const imageUrl: string = useMemo(() => {
    if (urlToImage) {
      return urlToImage;
    }
    return "";
  }, [urlToImage]);

  const fallbackImage = useMemo(() => {
    if (theme === "light") {
      return require("../../../../../assets/Image_not_available_light.png");
    }
    return require("../../../../../assets/Image_not_available_dark.png");
  }, [theme]);

  return (
    <Box
      style={shadowConfig}
      bg="primary.secondaryBgColor"
      mt="4"
      mx="5"
      pt="3"
      px="3"
      borderRadius="lg"
    >
      <Image
        source={imageUrl ? { uri: imageUrl } : fallbackImage}
        fallbackSource={fallbackImage}
        alt="My Image"
        borderWidth={1}
        borderColor="primary.borderColor"
        backgroundColor="primary.backgroundColor"
        height="180"
        width="100%"
        resizeMode="contain"
        borderRadius="lg"
      />

      <Stack space="2" pb="1">
        <Text
          textAlign={getTextAlign(language)}
          fontSize={20}
          color={textColor}
          fontWeight="black"
          numberOfLines={4}
          mt="2"
        >
          {title}
        </Text>
        <Divider
          _dark={{ bg: "primary.borderColor" }}
          _light={{ bg: "primary.borderColor" }}
        />
        <HStack alignItems="center" justifyContent="space-between">
          {author ? (
            <Tooltip label="Click here to read more" openDelay={500}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                color={textColor}
                width="140"
                fontWeight="bold"
                borderRadius="md"
                py="1"
                borderColor="primary.borderColor"
              >
                {author}
              </Text>
            </Tooltip>
          ) : (
            <Text></Text>
          )}
          <Text
            textAlign={getTextAlign(language)}
            color={textColor}
            fontWeight="bold"
          >
            {getDateText(publishedAt, language)}
          </Text>
        </HStack>
        <Divider
          _dark={{ bg: "primary.borderColor" }}
          _light={{ bg: "primary.borderColor" }}
        />
        <Text
          textAlign={getTextAlign(language)}
          fontSize={16}
          color={textColor}
          isTruncated
          noOfLines={4}
        >
          {description}
        </Text>
        <Box
          width="100%"
          flexDirection={language === "ar" ? "row-reverse" : "row"}
        >
          <Pressable onPress={() => handleCardPress(url)} mb="2">
            <Box alignItems="center" flexDirection="row">
              <Text mb="0.5" fontWeight="bold" color={textColor} mr="1">
                {getlanguageText(FIND_MORE_TEXT, language)}
              </Text>

              <AntDesign name="arrowright" size={16} color={textColor} />
            </Box>
          </Pressable>
        </Box>
      </Stack>
    </Box>
  );
};

export default React.memo(NewsCard);
