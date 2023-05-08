import React, { useContext, useState } from "react";
import {
  Box,
  Modal,
  Text,
  Button,
  HStack,
  Pressable,
  ScrollView,
} from "native-base";
import { getlanguageText, getTextAlign } from "../../../../utils/commonUtils";
import {
  filterConfigType,
  filterOptionsType,
  FILTER_CONFIG,
  FILTER_SECTION_TEXT,
} from "../../../../constants/FilterConstants";
import { CANCEL_TEXT, SAVE_TEXT } from "../../../../constants/commonConstants";
import CustomButton from "../../../common/CustomButton";
import AppContext from "../../../../Context/AppContext";
import { SET_FILTER_VALUES } from "../../../../constants/reducerConstants";

type filterValuesType = {
  language?: string | undefined;
  sortBy?: string;
  from?: string;
};
type PropType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const FilterModal = ({ setShowModal, showModal }: PropType) => {
  const { state, dispatch } = useContext(AppContext);
  const { language, sortBy, from } = state || {};
  const [isFilterChanged, setIsFilterChanged] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<filterValuesType>({
    language,
    sortBy,
    from,
  });
  const handleChangeFilter = (): void => {
    const changedPayload: filterValuesType = {};
    Object.keys(filterValue).forEach((key) => {
      if (
        filterValue[key as keyof filterValuesType] !==
        state[key as keyof filterValuesType]
      ) {
        changedPayload[key as keyof filterValuesType] =
          filterValue[key as keyof filterValuesType];
      }
    });
    dispatch({ type: SET_FILTER_VALUES, payload: { ...changedPayload } });
    setShowModal(false);
  };
  const handleSelectFilter = (type: string, itemValue: string): void => {
    setFilterValue({ ...filterValue, [type]: itemValue });
    if (state[type as keyof filterValuesType] !== itemValue) {
      setIsFilterChanged(true);
    }
  };
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      size="md"
      closeOnOverlayClick={false}
      bg="rgba(0, 0, 0, 0.6)"
    >
      <Modal.Content maxH="450" backgroundColor="primary.secondaryBgColor">
        <Modal.Header
          backgroundColor="primary.secondaryBgColor"
          borderColor="primary.borderColor"
        >
          <Text
            textAlign={getTextAlign(language)}
            color="primary.textColor"
            fontWeight="bold"
            fontSize="lg"
          >
            {getlanguageText(FILTER_SECTION_TEXT, language)}
          </Text>
        </Modal.Header>
        <Modal.Body>
          {FILTER_CONFIG.map((config: filterConfigType, index: number) => {
            const { type, filterTitleText, filterOptions }: filterConfigType =
              config;
            return (
              <Box key={index} mb="3">
                <Text
                  textAlign={getTextAlign(language)}
                  color="primary.textColor"
                  fontWeight="bold"
                  fontSize="md"
                  mb="2"
                >
                  {getlanguageText(filterTitleText, language)}
                </Text>
                <ScrollView
                  horizontal={true}
                  width="100%"
                  showsHorizontalScrollIndicator={false}
                  flexDirection={`${
                    filterOptions.length <= 3
                      ? language === "ar"
                        ? "row-reverse"
                        : "row"
                      : "row"
                  }`}
                >
                  <HStack space={2} width="100%">
                    {filterOptions.map(
                      (opt: filterOptionsType, index: number) => {
                        const isSelected: boolean =
                          opt.value ===
                          filterValue[type as keyof filterValuesType];

                        return (
                          <Pressable
                            key={index}
                            bg={`${
                              isSelected
                                ? "primary.backgroundColor"
                                : "primary.buttonColor"
                            }`}
                            borderWidth={1}
                            p="2"
                            borderRadius="10"
                            onPress={() => handleSelectFilter(type, opt.value)}
                            borderColor="primary.borderColor"
                          >
                            <Text
                              textAlign={getTextAlign(language)}
                              color="primary.textColor"
                            >
                              {getlanguageText(opt.name, language)}
                            </Text>
                          </Pressable>
                        );
                      }
                    )}
                  </HStack>
                </ScrollView>
              </Box>
            );
          })}
        </Modal.Body>
        <Modal.Footer
          borderColor="primary.borderColor"
          backgroundColor="primary.secondaryBgColor"
        >
          <Button.Group space={2}>
            <CustomButton
              btnText={getlanguageText(CANCEL_TEXT, language)}
              isSelected={false}
              onPress={() => setShowModal(false)}
              isDisabled={false}
              customStyle={{ width: 100, height: 50 }}
            />
            <CustomButton
              btnText={getlanguageText(SAVE_TEXT, language)}
              isSelected={false}
              onPress={handleChangeFilter}
              isDisabled={!isFilterChanged}
              customStyle={{ width: 100, height: 50 }}
            />
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default FilterModal;
