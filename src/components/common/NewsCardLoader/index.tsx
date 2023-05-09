import { Center, Divider, HStack, Skeleton, Text, VStack } from "native-base";
import React from "react";

const NewsCardLoader = () => {
  return (
    <Center w="100%" p="5">
      {[1, 2, 3, 4].map((key) => (
        <VStack
          key={key}
          w="100%"
          borderWidth="1"
          space={2}
          rounded="md"
          borderColor="primary.borderColor"
          mb="4"
          p="3"
        >
          <Skeleton
            flex="1"
            height="200"
            rounded="lg"
            startColor="primary.secondaryBgColor"
            mb="2"
          />
          <VStack flex="2" space="2">
            <Skeleton h="6" rounded="full" startColor="primary.buttonColor" />
            <Divider
              _dark={{ bg: "primary.borderColor" }}
              _light={{ bg: "primary.borderColor" }}
            />
            <HStack justifyContent="space-between">
              <Skeleton
                h="3"
                rounded="full"
                startColor="primary.secondaryBgColor"
                width="120"
              />
              <Skeleton
                h="3"
                rounded="full"
                startColor="primary.secondaryBgColor"
                width="120"
              />
            </HStack>
            <Divider
              _dark={{ bg: "primary.borderColor" }}
              _light={{ bg: "primary.borderColor" }}
            />
            <Skeleton.Text startColor="primary.secondaryBgColor" lines={4} />
            <Skeleton
              h="3"
              w="110"
              flex="1"
              rounded="full"
              startColor="primary.buttonColor"
            />
          </VStack>
        </VStack>
      ))}
    </Center>
  );
};

export default NewsCardLoader;
