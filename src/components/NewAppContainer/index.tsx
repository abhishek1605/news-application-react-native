import { Box } from "native-base";
import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";

const NewAppContainer = () => {
  return (
    <Box
      alignItems="center"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "black",
      }}
    >
      News App container
    </Box>
  );
};

export default NewAppContainer;
