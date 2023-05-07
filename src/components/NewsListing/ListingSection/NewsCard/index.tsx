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
import { FIND_MORE_TEXT } from "../../../../constants/commonConstants";
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
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 4,
      }}
      bg="primary.secondaryBgColor"
      mt="4"
      mx="5"
      pt="3"
      px="3"
      borderRadius="lg"
      borderWidth={1}
      borderColor="primary.borderColor"
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
        shadow={9}
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
        <HStack alignItems="center" justifyContent="space-between">
          {author ? (
            <Tooltip label="Click here to read more" openDelay={500}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                color={textColor}
                width="120"
                fontWeight="bold"
                textAlign="center"
                borderRadius="md"
                bg="primary.buttonColor"
                borderWidth={1}
                py="1"
                px="2"
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

        <Text
          textAlign={getTextAlign(language)}
          fontSize={16}
          color={textColor}
          isTruncated
          noOfLines={4}
        >
          {description}
        </Text>
        <Divider
          my="1"
          _dark={{ bg: "primary.borderColor" }}
          _light={{ bg: "primary.borderColor" }}
        />
        <Pressable
          onPress={() => handleCardPress(url)}
          borderWidth="1"
          py="2"
          px="4"
          mb="2"
          borderRadius="full"
          borderColor="primary.borderColor"
          backgroundColor="primary.buttonColor"
        >
          <Box
            alignItems="center"
            width="100%"
            justifyContent="space-between"
            flexDirection="row"
          >
            <Text fontWeight="bold" color={textColor}>
              {getlanguageText(FIND_MORE_TEXT, language)}
            </Text>
            <AntDesign name="arrowright" size={16} color={textColor} />
          </Box>
        </Pressable>
      </Stack>
    </Box>
  );
};

export default React.memo(NewsCard);
