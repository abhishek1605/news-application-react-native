import { Center, HStack, Skeleton, Text, VStack } from "native-base";
import React from "react";

const NewsCardLoader = () => {
  return (
    <Center w="100%">
      {[1, 2, 3, 4, 5].map((key) => (
        <HStack
          key={key}
          w="100%"
          borderWidth="1"
          space={2}
          rounded="md"
          borderColor="primary.borderColor"
          mb="4"
        >
          <Skeleton
            flex="1"
            w="250"
            h="155"
            borderBottomLeftRadius="md"
            borderTopLeftRadius="md"
            startColor="primary.secondaryBgColor"
          />
          <VStack p="2" flex="2" space="2">
            <Skeleton h="6" rounded="full" startColor="primary.buttonColor" />
            <Skeleton
              h="3"
              rounded="full"
              startColor="primary.secondaryBgColor"
            />
            <Skeleton.Text startColor="primary.secondaryBgColor" />
            <HStack space={2} mt="1">
              <Skeleton
                h="3"
                w="10"
                flex="1"
                rounded="full"
                startColor="primary.buttonColor"
              />
              <Skeleton
                h="3"
                w="10"
                flex="1"
                rounded="full"
                startColor="primary.buttonColor"
              />
            </HStack>
          </VStack>
        </HStack>
      ))}
    </Center>
  );
};

export default NewsCardLoader;
