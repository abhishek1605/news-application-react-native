import React, { useState } from "react";
import { IconButton, Center, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import FilterModal from "./FilterModal";

const FilterSection = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowFilterModal = (): void => {
    setShowModal(true);
  };

  return (
    <Center
      borderLeftWidth={1}
      borderColor="primary.borderColor"
      flexBasis="30%"
    >
      <Box pl="3" pr="3" width="100%">
        <IconButton
          size="md"
          variant="solid"
          backgroundColor="primary.buttonColor"
          color="primary.textColor"
          borderWidth={1}
          borderColor="primary.borderColor"
          _icon={{
            as: MaterialIcons,
            name: "menu",
          }}
          textAlign="center"
          onPress={handleShowFilterModal}
        />
      </Box>
      {showModal && (
        <FilterModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </Center>
  );
};

export default FilterSection;
